import { cartSlice } from './CartSlice'
import { Product } from '../types'
import { RootState, AppDispatch } from '../store/store'

export const addToCartThunk = (id: number, count: number) => (dispatch: AppDispatch, getState: () => RootState) => {
  const prodInCartAll = getState().cart.cartData

  const prodInCart = prodInCartAll.find((product: Product) => product.id === id)
  if (prodInCart) {
    dispatch(cartSlice.actions.addOld({ id, count }))
  } else {
    const products = getState().catalog.data
    const productInCatalog = products.find((product: Product) => product.id === id)
    if (productInCatalog) {
      const newProductToCart = { ...productInCatalog, count }
      dispatch(cartSlice.actions.addNew(newProductToCart))
    }
  }
}
