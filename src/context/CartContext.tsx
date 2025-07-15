import { createContext, useState, type ReactNode } from 'react'

import { useDataContext } from '../hooks/useDataContext/useDataContext'
import type { ProductWithCount } from '../types'

interface CartContextValue {
  cartData: ProductWithCount[]
  cartOpen: boolean
  onToggleCartOpen: () => void
  onAddToCard: (id: number, count: number) => void
  incrementProductCount: (id: number) => void
  decrementProductCount: (id: number) => void
  onDeleteFromCart: (id: number) => void
}

interface CartContextProps {
  children: ReactNode
}

const CartContext = createContext<CartContextValue | null>(null)

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartData, setCartData] = useState<ProductWithCount[]>([])
  const [cartOpen, setCartOpen] = useState(false)

  const { data } = useDataContext()
  const onToggleCartOpen = () => {
    setCartOpen((prev) => !prev)
  }

  const findProduct = <T extends { id: number }>(id: number, arr: T[]): T | undefined => {
    return arr.find((prod) => prod.id === id)
  }

  const onAddToCard = (id: number, count: number) => {
    const productInCart = findProduct(id, cartData)
    if (productInCart) {
      const newProductInfo = { ...productInCart, count: productInCart.count + count }
      setCartData((prev) => prev.map((item) => (item.id === id ? newProductInfo : item)))
    } else {
      const productInData = findProduct(id, data)
      if (!productInData) return
      const productWithCount = { ...productInData, count }
      setCartData((prev) => [...prev, productWithCount])
    }
  }

  const onDeleteFromCart = (id: number) => {
    setCartData((prev) => [...prev.filter((el) => el.id !== id)])
  }

  const incrementProductCount = (id: number) => {
    const productInCart = findProduct(id, cartData)
    if (!productInCart) return
    const newProductInfo = { ...productInCart, count: productInCart.count + 1 }
    setCartData((prev) => prev.map((item) => (item.id === id ? newProductInfo : item)))
  }

  const decrementProductCount = (id: number) => {
    const productInCart = findProduct(id, cartData)
    if (!productInCart) return

    const newCount = productInCart.count - 1
    if (newCount <= 0) {
      onDeleteFromCart(id)
    } else {
      const newProductInfo = { ...productInCart, count: newCount }
      setCartData((prev) => prev.map((item) => (item.id === id ? newProductInfo : item)))
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartData,
        cartOpen,
        onToggleCartOpen,
        onAddToCard,
        incrementProductCount,
        decrementProductCount,
        onDeleteFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
