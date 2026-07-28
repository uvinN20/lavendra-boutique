import type { Collection } from '../types/product'

export const ALL_COLLECTION_ID = 'all'

export const collections: Collection[] = [
  { id: ALL_COLLECTION_ID, label: 'All Collections', categorySlugs: [] },
  {
    id: 'tech-essentials',
    label: 'Tech Essentials',
    categorySlugs: ['smartphones', 'laptops', 'tablets', 'mobile-accessories'],
  },
  {
    id: 'modern-apparel',
    label: 'Modern Apparel',
    categorySlugs: ['mens-shirts', 'tops', 'womens-dresses', 'mens-shoes', 'womens-shoes', 'sunglasses'],
  },
  {
    id: 'home-office',
    label: 'Home Office',
    categorySlugs: ['furniture', 'kitchen-accessories'],
  },
  {
    id: 'limited-drop',
    label: 'Limited Drop',
    categorySlugs: ['womens-jewellery', 'womens-bags', 'womens-watches', 'mens-watches'],
  },
  {
    id: 'architectural-prints',
    label: 'Architectural Prints',
    categorySlugs: ['home-decoration'],
  },
]
