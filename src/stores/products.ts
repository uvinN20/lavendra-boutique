import { defineStore } from 'pinia'
import { fetchProducts } from '../api/products'
import { ALL_COLLECTION_ID, collections } from '../data/collections'
import type { Product } from '../types/product'

interface ProductsState {
  items: Product[]
  isLoading: boolean
  error: string | null
  activeCollectionId: string
  searchQuery: string
}

export const useProductsStore = defineStore('products', {
  state: (): ProductsState => ({
    items: [],
    isLoading: false,
    error: null,
    activeCollectionId: ALL_COLLECTION_ID,
    searchQuery: '',
  }),
  getters: {
    filteredProducts(state): Product[] {
      const activeCollection = collections.find((c) => c.id === state.activeCollectionId)
      let list = state.items

      if (activeCollection && activeCollection.categorySlugs.length > 0) {
        list = list.filter((p) => activeCollection.categorySlugs.includes(p.category))
      }

      const query = state.searchQuery.trim().toLowerCase()
      if (query) {
        list = list.filter(
          (p) =>
            p.title.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            (p.brand ?? '').toLowerCase().includes(query),
        )
      }
      return list
    },
    /** Home page keeps the landing grid tight (12-15 items) so it reads as a
     * curated storefront rather than the full catalogue dump. */
    homeProducts(): Product[] {
      return this.filteredProducts.slice(0, 15)
    },
    dealProducts(state): Product[] {
      // "Exclusive Deals" = the steepest discounts in the catalogue
      return [...state.items].sort((a, b) => b.discountPercentage - a.discountPercentage).slice(0, 3)
    },
    getById:
      (state) =>
      (id: number): Product | undefined =>
        state.items.find((p) => p.id === id),
  },
  actions: {
    async loadProducts(): Promise<void> {
      if (this.items.length > 0) return
      this.isLoading = true
      this.error = null
      try {
        const res = await fetchProducts(100)
        // The boutique only carries fashion/tech/home goods — DummyJSON's
        // "groceries" category (food, drinks, pet food, etc.) doesn't fit
        // the brand and is excluded from the catalogue entirely.
        this.items = res.products.filter((p) => p.category !== 'groceries')
      } catch (err) {
        this.error = err instanceof Error ? err.message : 'Failed to load products'
      } finally {
        this.isLoading = false
      }
    },
    setCollection(id: string): void {
      this.activeCollectionId = id
    },
    setSearchQuery(query: string): void {
      this.searchQuery = query
    },
  },
})
