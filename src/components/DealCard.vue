<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../stores/cart'
import type { Product } from '../types/product'

const props = defineProps<{
  product: Product
  badge: string
}>()

const cart = useCartStore()

const originalPrice = computed(() => {
  const discountFraction = props.product.discountPercentage / 100
  return props.product.price / (1 - discountFraction)
})

function onAddToCart(): void {
  cart.addToCart(props.product, 1)
}
</script>

<template>
  <article class="overflow-hidden rounded-xl2 bg-white shadow-card dark:bg-surface-card dark:shadow-cardDark">
    <div class="relative aspect-[16/10] bg-navy-700">
      <img :src="product.thumbnail" :alt="product.title" class="h-full w-full object-cover opacity-90" />
      <span class="absolute left-3 top-3 rounded-md bg-lavender-500 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
        {{ badge }}
      </span>
      <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
        <h3 class="font-display text-sm font-bold text-white">{{ product.title }}</h3>
      </div>
    </div>
    <div class="flex flex-col gap-3 p-4">
      <p class="line-clamp-1 text-xs text-navy-500/60 dark:text-slate-400">{{ product.description }}</p>
      <div class="flex items-center justify-between">
        <div class="flex items-baseline gap-2">
          <span class="font-display text-base font-bold text-navy-500 dark:text-white">${{ product.price.toFixed(2) }}</span>
          <span class="text-xs text-navy-500/40 line-through dark:text-slate-500">${{ originalPrice.toFixed(2) }}</span>
        </div>
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
