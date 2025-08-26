import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductWithCount } from '../types'

interface CatalogState {
  cartData: ProductWithCount[]
}

const initialState: CatalogState = {
  cartData: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addNew(state, action: PayloadAction<ProductWithCount>) {
      state.cartData.push(action.payload)
    },
    addOld(state, action: PayloadAction<{ id: number; count: number }>) {
      const { id, count } = action.payload
      const prodInCart = state.cartData.find((prod) => prod.id === id)
      if (prodInCart) {
        prodInCart.count += count
      }
    },
    incProdCount(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload
      const prodInCart = state.cartData.find((prod) => prod.id === id)
      if (prodInCart) {
        prodInCart.count += 1
      }
    },
    decProdCount(state, action: PayloadAction<{ id: number }>) {
      const { id } = action.payload
      const prodInCart = state.cartData.find((prod) => prod.id === id)
      if (prodInCart) {
        prodInCart.count -= 1
        if (prodInCart.count <= 0) {
          state.cartData = state.cartData.filter((prod) => prod.id !== id)
        }
      }
    },
  },
})

export const { addNew } = cartSlice.actions
export default cartSlice.reducer
