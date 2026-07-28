<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
</script>

<template>
  <div class="mx-auto max-w-4xl px-6 py-10">
    <h1 class="font-display text-3xl font-extrabold text-navy-500 dark:text-white">Your Cart</h1>

    <div v-if="cart.lines.length === 0" class="mt-10 rounded-xl2 border border-dashed border-navy-200 px-6 py-16 text-center dark:border-white/10">
      <p class="text-sm text-navy-500/60 dark:text-slate-400">Your cart is empty.</p>
      <RouterLink to="/" class="mt-4 inline-block rounded-full bg-navy-500 px-6 py-3 text-sm font-semibold text-white hover:bg-navy-600">
        Continue Shopping
      </RouterLink>
    </div>

    <div v-else class="mt-8 space-y-4">
      <div
        v-for="line in cart.lines"
        :key="line.product.id"
        class="flex items-center gap-4 rounded-xl2 bg-white p-4 shadow-card dark:bg-surface-card dark:shadow-cardDark"
      >
        <RouterLink :to="`/product/${line.product.id}`" class="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-navy-50 dark:bg-white/5">
          <img :src="line.product.thumbnail" :alt="line.product.title" class="h-full w-full object-cover" />
        </RouterLink>

        <div class="min-w-0 flex-1">
          <RouterLink :to="`/product/${line.product.id}`" class="font-display text-sm font-semibold text-navy-500 hover:underline dark:text-white">
            {{ line.product.title }}
          </RouterLink>
          <p class="text-xs text-navy-500/60 dark:text-slate-400">${{ line.product.price.toFixed(2) }} each</p>
        </div>

        <div class="flex items-center rounded-full border border-navy-100 dark:border-white/10">
          <button
            type="button"
            class="px-3 py-1.5 text-navy-500 dark:text-white"
            aria-label="Decrease quantity"
            @click="cart.updateQuantity(line.product.id, line.quantity - 1)"
          >
            −
          </button>
          <span class="w-6 text-center text-sm font-semibold text-navy-500 dark:text-white">{{ line.quantity }}</span>
          <button
            type="button"
            class="px-3 py-1.5 text-navy-500 dark:text-white"
            aria-label="Increase quantity"
            @click="cart.updateQuantity(line.product.id, line.quantity + 1)"
          >
            +
          </button>
        </div>

        <span class="w-20 text-right font-display text-sm font-bold text-navy-500 dark:text-white">
          ${{ (line.product.price * line.quantity).toFixed(2) }}
        </span>

        <button
          type="button"
          aria-label="Remove item"
          class="text-navy-500/40 transition hover:text-red-500 dark:text-slate-500"
          @click="cart.removeFromCart(line.product.id)"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      <div class="flex items-center justify-between rounded-xl2 bg-navy-50 p-5 dark:bg-white/5">
        <span class="font-display text-base font-bold text-navy-500 dark:text-white">Subtotal</span>
        <span class="font-display text-xl font-extrabold text-navy-500 dark:text-white">${{ cart.subtotal.toFixed(2) }}</span>
      </div>

      <div class="flex justify-end gap-3">
        <button
          type="button"
          class="rounded-full border border-navy-100 px-5 py-2.5 text-sm font-semibold text-navy-500 hover:bg-navy-50 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
          @click="cart.clearCart()"
        >
          Clear Cart
        </button>
        <button type="button" class="rounded-full bg-navy-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-navy-600">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>
