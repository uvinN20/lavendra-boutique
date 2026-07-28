<script setup lang="ts">
import { useProductsStore } from '../stores/products'

const products = useProductsStore()
</script>

<template>
  <div class="relative w-full max-w-xs">
    <svg
      viewBox="0 0 24 24"
      class="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-500/40 dark:text-slate-400"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <circle cx="11" cy="11" r="7" />
      <path stroke-linecap="round" d="M21 21l-4.3-4.3" />
    </svg>
    <input
      type="search"
      placeholder="Search products…"
      class="w-full rounded-full border border-navy-100 bg-white py-2 pl-9 pr-4 text-sm text-navy-500 placeholder:text-navy-500/40 dark:border-white/10 dark:bg-surface-card dark:text-white dark:placeholder:text-slate-500"
      :value="products.searchQuery"
      @input="products.setSearchQuery(($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
