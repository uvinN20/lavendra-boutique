<script setup lang="ts">
import { onMounted } from 'vue'
import CollectionFilter from '../components/CollectionFilter.vue'
import ProductGrid from '../components/ProductGrid.vue'
import { useProductsStore } from '../stores/products'

const products = useProductsStore()

onMounted(() => {
  products.loadProducts()
})
</script>

<template>
  <div>
    <div class="mx-auto max-w-6xl px-6 pt-10">
      <p class="text-xs font-bold uppercase tracking-widest text-lavender-500">Browse</p>
      <h1 class="mt-1 font-display text-3xl font-extrabold text-navy-500 dark:text-white">All Categories</h1>
      <p class="mt-2 max-w-lg text-sm text-navy-500/60 dark:text-slate-400">
        Filter by collection or search the full catalogue.
      </p>
    </div>
    <div class="mt-6">
      <CollectionFilter />
    </div>
    <ProductGrid :products="products.filteredProducts" :is-loading="products.isLoading" />
  </div>
</template>
