<script setup lang="ts">
import { onMounted } from 'vue'
import CollectionFilter from '../components/CollectionFilter.vue'
import DealsSection from '../components/DealsSection.vue'
import Hero from '../components/Hero.vue'
import Newsletter from '../components/Newsletter.vue'
import ProductGrid from '../components/ProductGrid.vue'
import { useProductsStore } from '../stores/products'

const products = useProductsStore()

onMounted(() => {
  products.loadProducts()
})
</script>

<template>
  <div>
    <Hero />
    <CollectionFilter />
    <ProductGrid :products="products.homeProducts" :is-loading="products.isLoading" />
    <DealsSection />
    <Newsletter />
  </div>
</template>
