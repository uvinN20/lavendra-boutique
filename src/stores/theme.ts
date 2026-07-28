import { defineStore } from 'pinia'

const STORAGE_KEY = 'lavendra_theme_v1'

function applyThemeClass(isDark: boolean): void {
  const root = document.documentElement
  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

function loadInitialTheme(): boolean {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) return stored === 'dark'
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark: loadInitialTheme(),
  }),
  actions: {
    init(): void {
      applyThemeClass(this.isDark)
    },
    toggle(): void {
      this.isDark = !this.isDark
      localStorage.setItem(STORAGE_KEY, this.isDark ? 'dark' : 'light')
      applyThemeClass(this.isDark)
    },
  },
})
