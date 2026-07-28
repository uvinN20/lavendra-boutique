<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const submitted = ref(false)

function onSubscribe(): void {
  if (!email.value.trim()) return
  submitted.value = true
  email.value = ''
}
</script>

<template>
  <section class="bg-navy-50 py-16 text-center dark:bg-surface-card">
    <div class="mx-auto max-w-xl px-6">
      <h2 class="font-display text-2xl font-bold text-navy-500 dark:text-white">Stay within the structure.</h2>
      <p class="mt-2 text-sm text-navy-500/70 dark:text-slate-400">
        Join our newsletter for exclusive drops and architectural insights.
      </p>
      <form class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center" @submit.prevent="onSubscribe">
        <input
          v-model="email"
          type="email"
          required
          placeholder="Your email"
          class="w-full rounded-full border border-navy-100 bg-white px-5 py-3 text-sm text-navy-500 placeholder:text-navy-500/40 dark:border-white/10 dark:bg-surface-dark dark:text-white sm:w-64"
        />
        <button
          type="submit"
          class="rounded-full bg-navy-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-600"
        >
          Subscribe
        </button>
      </form>
      <p v-if="submitted" class="mt-3 text-xs font-medium text-emerald-500">You're on the list — welcome in.</p>
    </div>
  </section>
</template>
