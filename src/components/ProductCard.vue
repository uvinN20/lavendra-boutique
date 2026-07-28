<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useWishlistStore } from '../stores/wishlist'
import type { Product } from '../types/product'
import StarRating from './StarRating.vue'

const props = defineProps<{ product: Product }>()

const cart = useCartStore()
const wishlist = useWishlistStore()

function onAddToCart(): void {
  cart.addToCart(props.product, 1)
}

function onToggleWishlist(): void {
  wishlist.toggle(props.product.id)
}
</script>

<template>
  <article
    class="group flex flex-col overflow-hidden rounded-xl2 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-surface-card dark:shadow-cardDark"
  >
    <RouterLink :to="`/product/${product.id}`" class="relative block aspect-square overflow-hidden bg-navy-50 dark:bg-white/5">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        loading="lazy"
        class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
      />
      <button
        type="button"
        :aria-label="wishlist.isSaved(product.id) ? 'Remove from wishlist' : 'Save to wishlist'"
        class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy-500 shadow-sm transition hover:scale-105 dark:bg-black/50 dark:text-white"
        @click.stop.prevent="onToggleWishlist"
      >
        <svg
          viewBox="0 0 24 24"
          class="h-4 w-4"
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
    </RouterLink>

    <div class="flex flex-1 flex-col gap-1 p-4">
      <div class="flex items-start justify-between gap-2">
        <RouterLink :to="`/product/${product.id}`" class="font-display text-sm font-semibold text-navy-500 hover:underline dark:text-white">
          {{ product.title }}
        </RouterLink>
        <StarRating :rating="product.rating" />
      </div>
      <p class="line-clamp-1 text-xs text-navy-500/60 dark:text-slate-400">{{ product.description }}</p>

      <div class="mt-2 flex items-center justify-between">
        <span class="font-display text-base font-bold text-navy-500 dark:text-white">
          ${{ product.price.toFixed(2) }}
        </span>
        <button
          type="button"
          aria-label="Add to cart"
          class="flex h-8 w-8 items-center justify-center rounded-full bg-navy-50 text-navy-500 transition hover:bg-navy-500 hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-lavender-500"
          @click="onAddToCart"
        >
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="1.8">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l2.4 12.2a2 2 0 002 1.8h8.4a2 2 0 002-1.7L20 8H6"
            />
            <circle cx="9" cy="20" r="1" />
            <circle cx="17" cy="20" r="1" />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>
