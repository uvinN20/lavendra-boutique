import { defineStore } from 'pinia'
import type { Product } from '../types/product'

const STORAGE_KEY = 'lavendra_cart_v1'

export interface CartLine {
  product: Product
  quantity: number
}

interface CartState {
  lines: CartLine[]
}

function loadFromStorage(): CartLine[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartLine[]) : []
  } catch {
    return []
  }
}

function persist(lines: CartLine[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    lines: loadFromStorage(),
  }),
  getters: {
    itemCount: (state): number => state.lines.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: (state): number =>
      state.lines.reduce((sum, line) => sum + line.quantity * line.product.price, 0),
    isInCart:
      (state) =>
      (productId: number): boolean =>
        state.lines.some((line) => line.product.id === productId),
  },
  actions: {
    addToCart(product: Product, quantity = 1): void {
      const existing = this.lines.find((line) => line.product.id === product.id)
      if (existing) {
        existing.quantity += quantity
      } else {
        this.lines.push({ product, quantity })
      }
      persist(this.lines)
    },
    removeFromCart(productId: number): void {
      this.lines = this.lines.filter((line) => line.product.id !== productId)
      persist(this.lines)
    },
    updateQuantity(productId: number, quantity: number): void {
      const line = this.lines.find((l) => l.product.id === productId)
      if (!line) return
      if (quantity <= 0) {
        this.removeFromCart(productId)
        return
      }
      line.quantity = quantity
      persist(this.lines)
    },
    clearCart(): void {
      this.lines = []
      persist(this.lines)
    },
  },
})
