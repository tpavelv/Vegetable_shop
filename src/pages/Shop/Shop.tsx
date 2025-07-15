import { Header } from '../../module/Header'
import { Cart } from '../../module/Cart'
import { Catalog } from '../../module/Catalog/Catalog'

import { useCart } from '../../hooks/useCartContext/useCart'

export const Shop = () => {
  const { cartOpen } = useCart()

  return (
    <>
      <Header />
      {cartOpen && <Cart />}
      <Catalog />
    </>
  )
}
