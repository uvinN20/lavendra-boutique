import { defineStore } from 'pinia'

const STORAGE_KEY = 'lavendra_wishlist_v1'

function loadFromStorage(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as number[]) : []
  } catch {
    return []
  }
}

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    productIds: loadFromStorage(),
  }),
  getters: {
    isSaved:
      (state) =>
      (productId: number): boolean =>
        state.productIds.includes(productId),
  },
  actions: {
    toggle(productId: number): void {
      if (this.productIds.includes(productId)) {
        this.productIds = this.productIds.filter((id) => id !== productId)
      } else {
        this.productIds = [...this.productIds, productId]
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.productIds))
    },
  },
})
