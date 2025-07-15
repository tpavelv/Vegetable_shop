import styles from './Cart.module.scss'

import { CartView } from './CartView'

import emptyCart from '../../assets/images/cart_empty.svg'

import { useCart } from '../../hooks/useCartContext/useCart'

export const Cart = () => {
  const { cartData } = useCart()

  if (!cartData.length) {
    return (
      <div className={`${styles.cart} ${styles['cart--empty']}`}>
        <img src={emptyCart} alt="Empty cart" />
        <span>Your cart is empty</span>
      </div>
    )
  }

  const calculateTotalPrice = cartData.reduce((acc, { count, price }) => acc + count * price, 0)

  return <CartView products={cartData} totalPrice={calculateTotalPrice} />
}
