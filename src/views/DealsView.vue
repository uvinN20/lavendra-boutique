<script setup lang="ts">
import { computed, onMounted } from 'vue'
import DealCard from '../components/DealCard.vue'
import { useProductsStore } from '../stores/products'

const products = useProductsStore()

onMounted(() => {
  products.loadProducts()
})

const allDeals = computed(() =>
  [...products.items].filter((p) => p.discountPercentage > 0).sort((a, b) => b.discountPercentage - a.discountPercentage),
)

const badges = ['Save 30%', 'Flash Sale', 'Last Chance']
function badgeFor(index: number): string {
  return badges[index % badges.length]
}
</script>

<template>
  <div class="mx-auto max-w-6xl px-6 py-10">
    <p class="text-xs font-bold uppercase tracking-widest text-lavender-500">Deals</p>
    <h1 class="mt-1 font-display text-3xl font-extrabold text-navy-500 dark:text-white">Exclusive Deals</h1>
    <p class="mt-2 max-w-lg text-sm text-navy-500/60 dark:text-slate-400">
      Every discounted piece in the boutique, sorted by the steepest savings.
    </p>

    <div v-if="products.isLoading" class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
      <div v-for="n in 6" :key="n" class="aspect-[4/3] animate-pulse rounded-xl2 bg-navy-50 dark:bg-white/5" />
    </div>

    <div v-else class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <DealCard v-for="(deal, index) in allDeals" :key="deal.id" :product="deal" :badge="badgeFor(index)" />
    </div>
  </div>
</template>
