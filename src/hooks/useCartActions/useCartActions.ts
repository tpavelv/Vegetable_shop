import { useTypedDispatch } from '../redux/redux'
import { addToCartThunk } from '../../reducers/CartThunks'
import { cartSlice } from '../../reducers/CartSlice'

const { incProdCount: incProdCountAction, decProdCount: decProdCountAction } = cartSlice.actions
export const useCartActions = () => {
  const dispatch = useTypedDispatch()

  const addToCart = (id: number, count: number) => {
    dispatch(addToCartThunk(id, count))
  }

  const incProdCount = (id: number) => {
    dispatch(incProdCountAction({ id }))
  }

  const decProdCount = (id: number) => {
    dispatch(decProdCountAction({ id }))
  }

  return {
    addToCart,
    incProdCount,
    decProdCount,
  }
}
