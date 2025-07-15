import { CartItemView } from './CartItemView'
import { useCart } from '../../hooks/useCartContext/useCart'

interface CartItemProps {
  image: string
  title: string
  unitProduct: string
  price: number
  productCount: number
  id: number
}

export const CartItem = ({ image, title, unitProduct, price, productCount, id }: CartItemProps) => {
  const { incrementProductCount, decrementProductCount } = useCart()

  return (
    <CartItemView
      image={image}
      title={title}
      unitProduct={unitProduct}
      price={price}
      productCount={productCount}
      onIncrement={() => incrementProductCount(id)}
      onDecrement={() => decrementProductCount(id)}
    />
  )
}
