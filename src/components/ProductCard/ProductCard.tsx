import { useCount } from '../../hooks/useCount/useCount'
import { ProductCardView } from './ProductCardView'
import { LoadingProductCard } from './LoadingProductCard'

import { useCart } from '../../hooks/useCartContext/useCart'
import { Product } from '../../types'

interface ProductCardProps {
  product: Product | null
  isLoading: boolean
}

export const ProductCard = ({ product, isLoading }: ProductCardProps) => {
  const { count, onIncrement, onDecrement } = useCount(1)

  const { onAddToCard } = useCart()

  if (isLoading || !product) {
    return <LoadingProductCard />
  } else {
    const { name, price, image, id } = product
    const [title, unitProduct] = name.split(' - ')

    return (
      <ProductCardView
        title={title}
        price={price}
        image={image}
        unitProduct={unitProduct}
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onAction={() => onAddToCard(id, count)}
      />
    )
  }
}
