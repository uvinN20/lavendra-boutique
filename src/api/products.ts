import type { CategoryListItem, Product, ProductListResponse } from '../types/product'

const BASE_URL = 'https://dummyjson.com'

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    throw new Error(`DummyJSON request failed with status ${res.status}`)
  }
  return (await res.json()) as T
}

/** Fetch a page of products. DummyJSON returns 30 by default; we pull a
 * larger page so client-side collection filtering has enough to work with. */
export async function fetchProducts(limit = 100, skip = 0): Promise<ProductListResponse> {
  const res = await fetch(`${BASE_URL}/products?limit=${limit}&skip=${skip}`)
  return handleResponse<ProductListResponse>(res)
}

export async function fetchProductById(id: number): Promise<Product> {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  return handleResponse<Product>(res)
}

export async function searchProducts(query: string): Promise<ProductListResponse> {
  const res = await fetch(`${BASE_URL}/products/search?q=${encodeURIComponent(query)}`)
  return handleResponse<ProductListResponse>(res)
}

export async function fetchCategories(): Promise<CategoryListItem[]> {
  const res = await fetch(`${BASE_URL}/products/categories`)
  return handleResponse<CategoryListItem[]>(res)
}
