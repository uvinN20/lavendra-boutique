<script setup lang="ts">
import { useProductsStore } from '../stores/products'
import DealCard from './DealCard.vue'

const products = useProductsStore()
const badges = ['Save 30%', 'Flash Sale', 'Last Chance']
</script>

<template>
  <section class="bg-navy-50/60 py-14 dark:bg-black/20">
    <div class="mx-auto max-w-6xl px-6">
      <p class="text-xs font-bold uppercase tracking-widest text-lavender-500">Deals</p>
      <h2 class="mt-1 font-display text-3xl font-extrabold text-navy-500 dark:text-white">Exclusive Deals</h2>

      <div v-if="products.dealProducts.length > 0" class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <DealCard
          v-for="(deal, index) in products.dealProducts"
          :key="deal.id"
          :product="deal"
          :badge="badges[index] ?? 'Deal'"
        />
      </div>
    </div>
  </section>
</template>
