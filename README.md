# Lavendra Boutique — Vue 3 SPA Mini Project

A data-driven e-commerce single page application built with **Vue 3 (Composition API)**,
**TypeScript** and **Tailwind CSS**, consuming the public [DummyJSON](https://dummyjson.com)
products API. Built for CS3404 GUI Programming.

## Features

- Live product catalogue from DummyJSON, fully typed (no `any`)
- Collection filter pills + live search
- Product detail page via dynamic route `/product/:id`
- Persistent cart (Pinia + localStorage)
- Wishlist heart toggle
- Dark mode toggle (persisted)
- Exclusive Deals section / page sorted by discount
- Fully responsive (mobile, tablet, desktop)

See `Report.pdf` for the full feature list and component architecture diagram.

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install dependencies
\`\`\`bash
npm install
\`\`\`

### Run the development server
\`\`\`bash
npm run dev
\`\`\`
Then open the printed local URL (default `http://localhost:5173`).

### Build for production
\`\`\`bash
npm run build
\`\`\`
Output is generated in `dist/`.

### Preview the production build
\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── api/            # typed fetch wrappers around DummyJSON
├── components/     # NavBar, Hero, ProductCard, DealCard, etc.
├── data/           # curated collection → category mapping
├── router/         # Vue Router config
├── stores/         # Pinia stores: products, cart, wishlist, theme
├── types/          # TypeScript interfaces for API data
├── views/          # HomeView, CategoriesView, DealsView, ProductDetailView, CartView
├── App.vue
├── main.ts
└── style.css
\`\`\`

## Tech Stack

Vue 3 · TypeScript · Vite · Tailwind CSS · Pinia · Vue Router · DummyJSON API
