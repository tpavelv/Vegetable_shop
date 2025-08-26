import { Header } from '../../module/Header'
import { Cart } from '../../module/Cart'
import { Catalog } from '../../module/Catalog/Catalog'

import { useTypedSelector } from '../../hooks/redux/redux'

export const Shop = () => {
  const cartOpen = useTypedSelector((state) => state.ui.cartOpen)
  return (
    <>
      <Header />
      {cartOpen && <Cart />}
      <Catalog />
    </>
  )
}
