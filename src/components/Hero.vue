<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="mx-auto max-w-6xl px-6 py-8">
    <div class="grid grid-cols-1 overflow-hidden rounded-xl2 md:grid-cols-2">
      <div class="flex flex-col justify-center gap-5 bg-navy-50 px-8 py-14 dark:bg-surface-card md:px-12">
        <h1 class="font-display text-4xl font-extrabold leading-tight text-navy-500 dark:text-white md:text-5xl">
          Defined by
          <span class="block text-lavender-500">Structure.</span>
        </h1>
        <p class="max-w-sm text-sm leading-relaxed text-navy-500/70 dark:text-slate-300">
          Curated architectural fashion and tech pieces that blend industrial precision with
          effortless luxury. Experience the new standard of digital retail.
        </p>
        <div class="mt-2 flex flex-wrap gap-3">
          <a
            href="#collection"
            class="rounded-full bg-navy-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-600"
          >
            Shop Now
          </a>
          <RouterLink
            to="/categories"
            class="rounded-full border border-navy-500/20 px-6 py-3 text-sm font-semibold text-navy-500 transition hover:bg-navy-50 dark:border-white/20 dark:text-white dark:hover:bg-white/5"
          >
            Explore Collection
          </RouterLink>
        </div>
      </div>

      <div class="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-10 dark:from-navy-700 dark:to-navy-900">
        <svg viewBox="0 0 400 320" class="h-full max-h-72 w-full max-w-md" role="img" aria-label="Architectural product still life illustration">
          <rect x="30" y="220" width="110" height="70" rx="4" class="fill-white/80 dark:fill-white/10" />
          <rect x="150" y="180" width="90" height="110" rx="4" class="fill-white/60 dark:fill-white/5" />
          <rect x="250" y="240" width="120" height="50" rx="4" class="fill-white/90 dark:fill-white/15" />
          <circle cx="85" cy="200" r="34" class="fill-navy-100 dark:fill-navy-400/40" />
          <rect x="170" y="140" width="50" height="34" rx="8" class="fill-navy-500/80 dark:fill-lavender-400/60" />
          <ellipse cx="300" cy="215" rx="26" ry="34" class="fill-navy-400/70 dark:fill-lavender-300/50" />
          <path d="M300 181 Q 320 150 340 165" class="stroke-navy-500/50 dark:stroke-lavender-300/40" stroke-width="3" fill="none" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  </section>
</template>
