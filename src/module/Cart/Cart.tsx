import styles from './Cart.module.scss'
import { CartView } from './CartView'
import emptyCart from '../../assets/images/cart_empty.svg'
import { useTypedSelector } from '../../hooks/redux/redux'

export const Cart = () => {
  const cartData = useTypedSelector((state) => state.cart.cartData)
  if (!cartData.length) {
    return (
      <div className={`${styles.cart} ${styles['cart--empty']}`}>
        <img src={emptyCart} alt="Empty cart" />
        <span>Your cart is empty</span>
      </div>
    )
  }

  const calculateTotalPrice = cartData.reduce((acc, { count, price }) => acc + count * price, 0)

  return <CartView products={cartData} totalPrice={calculateTotalPrice} testid="cart-filled" />
}
