<script setup lang="ts">
import type { Product } from '../types/product'
import ProductCard from './ProductCard.vue'

defineProps<{
  products: Product[]
  isLoading: boolean
}>()
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-8">
    <div v-if="isLoading" class="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      <div
        v-for="n in 8"
        :key="n"
        class="aspect-[3/4] animate-pulse rounded-xl2 bg-navy-50 dark:bg-white/5"
      />
    </div>

    <div
      v-else-if="products.length === 0"
      class="rounded-xl2 border border-dashed border-navy-200 px-6 py-16 text-center text-sm text-navy-500/60 dark:border-white/10 dark:text-slate-400"
    >
      No products match this collection or search yet. Try another filter.
    </div>

    <div v-else class="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
