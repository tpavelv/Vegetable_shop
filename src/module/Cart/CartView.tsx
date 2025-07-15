import styles from './Cart.module.scss'
import { CartFooter } from '../../components/CartFooter'
import { CartItem } from '../../components/CartItem'
import type { ProductWithCount } from '../../types'

interface CartViewProps {
  products: ProductWithCount[]
  totalPrice: number
}

export const CartView = ({ products, totalPrice }: CartViewProps) => {
  if (!products.length) {
    return <div className={styles.cart}></div>
  }

  return (
    <div className={styles.cart}>
      <ul>
        {products.map((product) => {
          const { name, price, image, count, id } = product
          const [title, unitProduct] = name.split(' - ')
          return (
            <li key={id}>
              <CartItem
                image={image}
                title={title}
                unitProduct={unitProduct}
                price={price}
                productCount={count}
                id={id}
              />
            </li>
          )
        })}
      </ul>
      <CartFooter totalPrice={totalPrice} />
    </div>
  )
}
