import { CartItemView } from './CartItemView'
import { useCartActions } from '../../hooks/useCartActions/useCartActions'
interface CartItemProps {
  image: string
  title: string
  unitProduct: string
  price: number
  productCount: number
  id: number
}

export const CartItem = ({ image, title, unitProduct, price, productCount, id }: CartItemProps) => {
  const { incProdCount, decProdCount } = useCartActions()
  return (
    <CartItemView
      image={image}
      title={title}
      unitProduct={unitProduct}
      price={price}
      productCount={productCount}
      onIncrement={() => incProdCount(id)}
      onDecrement={() => decProdCount(id)}
    />
  )
}
