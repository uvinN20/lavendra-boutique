<script setup lang="ts">
import { collections } from '../data/collections'
import { useProductsStore } from '../stores/products'
import SearchBar from './SearchBar.vue'

const products = useProductsStore()
</script>

<template>
  <div id="collection" class="mx-auto max-w-6xl px-6">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap gap-2">
      <button
        v-for="collection in collections"
        :key="collection.id"
        type="button"
        class="rounded-full px-4 py-2 text-sm font-medium transition"
        :class="
          products.activeCollectionId === collection.id
            ? 'bg-navy-500 text-white'
            : 'bg-navy-50 text-navy-500/80 hover:bg-navy-100 dark:bg-surface-card dark:text-slate-300 dark:hover:bg-white/10'
        "
        @click="products.setCollection(collection.id)"
      >
        {{ collection.label }}
      </button>
      </div>
      <div class="hidden sm:block">
        <SearchBar />
      </div>
    </div>
  </div>
</template>
