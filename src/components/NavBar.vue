<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'
import { useThemeStore } from '../stores/theme'

const cart = useCartStore()
const theme = useThemeStore()
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-navy-100/60 bg-surface/90 backdrop-blur dark:border-white/5 dark:bg-surface-dark/90"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="font-display text-lg font-bold tracking-tight text-navy-500 dark:text-white">
        Lavendra Boutique
      </RouterLink>

      <div class="hidden items-center gap-8 text-sm font-medium text-navy-500/70 dark:text-slate-300 md:flex">
        <RouterLink to="/" class="transition hover:text-navy-500 dark:hover:text-white" active-class="text-navy-500 dark:text-white">
          Home
        </RouterLink>
        <RouterLink
          to="/categories"
          class="transition hover:text-navy-500 dark:hover:text-white"
          active-class="text-navy-500 dark:text-white"
        >
          Categories
        </RouterLink>
        <RouterLink to="/deals" class="transition hover:text-navy-500 dark:hover:text-white" active-class="text-navy-500 dark:text-white">
          Deals
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">
        <button
          type="button"
          aria-label="Toggle dark mode"
          class="rounded-full p-2 text-navy-500/70 transition hover:bg-navy-50 dark:text-slate-300 dark:hover:bg-white/5"
          @click="theme.toggle()"
        >
          <svg v-if="!theme.isDark" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="12" r="4" />
            <path
              stroke-linecap="round"
              d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            />
          </svg>
        </button>

        <RouterLink
          to="/cart"
          aria-label="View cart"
          class="relative rounded-full p-2 text-navy-500/70 transition hover:bg-navy-50 dark:text-slate-300 dark:hover:bg-white/5"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l2.4 12.2a2 2 0 002 1.8h8.4a2 2 0 002-1.7L20 8H6"
            />
            <circle cx="9" cy="20" r="1" />
            <circle cx="17" cy="20" r="1" />
          </svg>
          <span
            v-if="cart.itemCount > 0"
            class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-navy-500 text-[10px] font-bold text-white"
          >
            {{ cart.itemCount }}
          </span>
        </RouterLink>

        <button
          type="button"
          aria-label="Account"
          class="rounded-full p-2 text-navy-500/70 transition hover:bg-navy-50 dark:text-slate-300 dark:hover:bg-white/5"
        >
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="12" cy="8" r="3.2" />
            <path stroke-linecap="round" d="M5 20c1.2-3.6 4-5.4 7-5.4S17.8 16.4 19 20" />
          </svg>
        </button>
      </div>
    </nav>
  </header>
</template>
