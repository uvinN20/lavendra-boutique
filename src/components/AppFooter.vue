<script setup lang="ts">
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-navy-100 bg-white py-12 dark:border-white/5 dark:bg-surface-dark">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
      <div>
        <p class="font-display text-lg font-bold text-navy-500 dark:text-white">Lavendra Boutique</p>
        <p class="mt-2 max-w-xs text-sm text-navy-500/60 dark:text-slate-400">
          Elevating the digital commerce experience through intentional design and structural elegance.
        </p>
        <div class="mt-4 flex gap-3">
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-navy-500 text-white">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d="M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.25-1.5 1.55-1.5H16.6V4.2C16.3 4.16 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.4H7.7v3h2.6V21h3.2z"/></svg>
          </span>
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-navy-500 text-white">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d="M20.9 6.2c-.6.3-1.3.5-2 .6.7-.4 1.3-1.2 1.5-2-.7.4-1.5.7-2.3.9a3.6 3.6 0 00-6.2 3.3A10.3 10.3 0 013 5.6a3.6 3.6 0 001.1 4.9c-.6 0-1.1-.2-1.6-.4v.1a3.6 3.6 0 002.9 3.6c-.5.1-1 .2-1.6.1a3.6 3.6 0 003.4 2.5A7.3 7.3 0 013 18a10.3 10.3 0 005.6 1.6c6.7 0 10.4-5.6 10.4-10.4v-.5c.7-.5 1.3-1.1 1.9-1.8z"/></svg>
          </span>
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-navy-500 text-white">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current"><path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.8 4 12 4 12 4s-3.8 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6C2.2 14 2.4 15.8 2.4 15.8s.2 1.5.8 2.1c.8.8 1.9.8 2.3.9 1.7.2 7.1.2 7.1.2s3.8 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V8.9l5.4 2.9-5.4 2.8z"/></svg>
          </span>
        </div>
      </div>

      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-navy-500/50 dark:text-slate-500">Navigation</p>
        <ul class="mt-3 space-y-2 text-sm text-navy-500/70 dark:text-slate-400">
          <li><RouterLink to="/" class="hover:text-navy-500 dark:hover:text-white">Home</RouterLink></li>
          <li><RouterLink to="/categories" class="hover:text-navy-500 dark:hover:text-white">Categories</RouterLink></li>
          <li><RouterLink to="/deals" class="hover:text-navy-500 dark:hover:text-white">Deals</RouterLink></li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-bold uppercase tracking-widest text-navy-500/50 dark:text-slate-500">Assistance</p>
        <ul class="mt-3 space-y-2 text-sm text-navy-500/70 dark:text-slate-400">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Shipping Info</li>
        </ul>
      </div>
    </div>
    <p class="mt-10 text-center text-xs text-navy-500/40 dark:text-slate-500">
      © {{ year }} Lavendra Boutique. All rights reserved.
    </p>
  </footer>
</template>
