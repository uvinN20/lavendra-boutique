<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { fetchProductById } from '../api/products'
import StarRating from '../components/StarRating.vue'
import { useCartStore } from '../stores/cart'
import { useProductsStore } from '../stores/products'
import { useWishlistStore } from '../stores/wishlist'
import type { Product } from '../types/product'

const props = defineProps<{ id: string }>()

const products = useProductsStore()
const cart = useCartStore()
const wishlist = useWishlistStore()

const product = ref<Product | null>(null)
const isLoading = ref(true)
const error = ref<string | null>(null)
const activeImage = ref('')
const quantity = ref(1)

async function loadProduct(idParam: string): Promise<void> {
  isLoading.value = true
  error.value = null
  quantity.value = 1
  const numericId = Number(idParam)

  const cached = products.getById(numericId)
  if (cached) {
    product.value = cached
    activeImage.value = cached.thumbnail
    isLoading.value = false
    return
  }

  try {
    const fetched = await fetchProductById(numericId)
    product.value = fetched
    activeImage.value = fetched.thumbnail
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Could not load this product'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => loadProduct(props.id))
watch(() => props.id, (newId) => loadProduct(newId))

const originalPrice = computed(() => {
  if (!product.value) return 0
  const discountFraction = product.value.discountPercentage / 100
  return product.value.price / (1 - discountFraction)
})

function onAddToCart(): void {
  if (!product.value) return
  cart.addToCart(product.value, quantity.value)
}
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-10">
    <RouterLink to="/" class="text-sm font-medium text-navy-500/60 hover:text-navy-500 dark:text-slate-400 dark:hover:text-white">
      &larr; Back to shop
    </RouterLink>

    <div v-if="isLoading" class="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
      <div class="aspect-square animate-pulse rounded-xl2 bg-navy-50 dark:bg-white/5" />
      <div class="space-y-4">
        <div class="h-8 w-2/3 animate-pulse rounded bg-navy-50 dark:bg-white/5" />
        <div class="h-4 w-1/3 animate-pulse rounded bg-navy-50 dark:bg-white/5" />
        <div class="h-24 w-full animate-pulse rounded bg-navy-50 dark:bg-white/5" />
      </div>
    </div>

    <p v-else-if="error" class="mt-10 text-sm text-red-500">{{ error }}</p>

    <div v-else-if="product" class="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
      <div>
        <div class="aspect-square overflow-hidden rounded-xl2 bg-navy-50 dark:bg-white/5">
          <img :src="activeImage" :alt="product.title" class="h-full w-full object-cover" />
        </div>
        <div v-if="product.images.length > 1" class="mt-3 flex gap-2 overflow-x-auto">
          <button
            v-for="img in product.images"
            :key="img"
            type="button"
            class="h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition"
            :class="activeImage === img ? 'border-navy-500' : 'border-transparent opacity-70 hover:opacity-100'"
            @click="activeImage = img"
          >
            <img :src="img" :alt="product.title" class="h-full w-full object-cover" />
          </button>
        </div>
      </div>

      <div>
        <p class="text-xs font-semibold uppercase tracking-widest text-lavender-500">{{ product.category }}</p>
        <div class="mt-1 flex items-start justify-between gap-4">
          <h1 class="font-display text-2xl font-extrabold text-navy-500 dark:text-white">{{ product.title }}</h1>
          <StarRating :rating="product.rating" />
        </div>
        <p class="mt-4 text-sm leading-relaxed text-navy-500/70 dark:text-slate-300">{{ product.description }}</p>

        <div class="mt-6 flex items-baseline gap-3">
          <span class="font-display text-3xl font-bold text-navy-500 dark:text-white">${{ product.price.toFixed(2) }}</span>
          <span v-if="product.discountPercentage > 0" class="text-sm text-navy-500/40 line-through dark:text-slate-500">
            ${{ originalPrice.toFixed(2) }}
          </span>
          <span v-if="product.discountPercentage > 0" class="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            -{{ Math.round(product.discountPercentage) }}%
          </span>
        </div>

        <p class="mt-2 text-xs" :class="product.stock > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'">
          {{ product.stock > 0 ? `${product.stock} in stock` : 'Out of stock' }}
        </p>

        <div class="mt-6 flex items-center gap-3">
          <div class="flex items-center rounded-full border border-navy-100 dark:border-white/10">
            <button
              type="button"
              class="px-3 py-2 text-navy-500 dark:text-white"
              aria-label="Decrease quantity"
              @click="quantity = Math.max(1, quantity - 1)"
            >
              −
            </button>
            <span class="w-8 text-center text-sm font-semibold text-navy-500 dark:text-white">{{ quantity }}</span>
            <button
              type="button"
              class="px-3 py-2 text-navy-500 dark:text-white"
              aria-label="Increase quantity"
              @click="quantity += 1"
            >
              +
            </button>
          </div>

          <button
            type="button"
            :disabled="product.stock === 0"
            class="flex-1 rounded-full bg-navy-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-600 disabled:cursor-not-allowed disabled:opacity-40"
            @click="onAddToCart"
          >
            Add to Cart
          </button>

          <button
            type="button"
            :aria-label="wishlist.isSaved(product.id) ? 'Remove from wishlist' : 'Save to wishlist'"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-navy-100 text-navy-500 dark:border-white/10 dark:text-white"
            @click="wishlist.toggle(product.id)"
          >
            <svg
              viewBox="0 0 24 24"
              class="h-5 w-5"
              :fill="wishlist.isSaved(product.id) ? 'currentColor' : 'none'"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21s-7-4.35-9.5-8.4C.8 9.4 2.1 6 5.4 6c1.9 0 3.2 1 4.6 2.7C11.4 7 12.7 6 14.6 6c3.3 0 4.6 3.4 2.9 6.6C19 16.65 12 21 12 21z"
              />
            </svg>
          </button>
        </div>

        <dl class="mt-8 grid grid-cols-2 gap-4 border-t border-navy-100 pt-6 text-xs text-navy-500/70 dark:border-white/10 dark:text-slate-400">
          <div>
            <dt class="font-semibold text-navy-500 dark:text-white">Brand</dt>
            <dd>{{ product.brand ?? 'Lavendra' }}</dd>
          </div>
          <div>
            <dt class="font-semibold text-navy-500 dark:text-white">Warranty</dt>
            <dd>{{ product.warrantyInformation }}</dd>
          </div>
          <div>
            <dt class="font-semibold text-navy-500 dark:text-white">Shipping</dt>
            <dd>{{ product.shippingInformation }}</dd>
          </div>
          <div>
            <dt class="font-semibold text-navy-500 dark:text-white">Returns</dt>
            <dd>{{ product.returnPolicy }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>
