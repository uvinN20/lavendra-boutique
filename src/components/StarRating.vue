<script setup lang="ts">
defineProps<{ rating: number }>()
</script>

<template>
  <span class="inline-flex items-center gap-1 text-xs font-semibold text-amber-500">
    <svg viewBox="0 0 20 20" class="h-3.5 w-3.5 fill-current">
      <path
        d="M10 1.5l2.472 5.008 5.528.803-4 3.898.944 5.507L10 13.9l-4.944 2.816.944-5.507-4-3.898 5.528-.803L10 1.5z"
      />
    </svg>
    {{ rating.toFixed(1) }}
  </span>
</template>
