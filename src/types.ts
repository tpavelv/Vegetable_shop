export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}
export interface ProductWithCount extends Product {
  count: number
}

export type Products = Product[]
