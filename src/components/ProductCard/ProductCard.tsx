import { useCount } from '../../hooks/useCount/useCount'
import { ProductCardView } from './ProductCardView'
import { LoadingProductCard } from './LoadingProductCard'

import { Product } from '../../types'
import { useCartActions } from '../../hooks/useCartActions/useCartActions'
interface ProductCardProps {
  product: Product | null
  isLoading: boolean
}

export const ProductCard = ({ product, isLoading }: ProductCardProps) => {
  const { count, onIncrement, onDecrement } = useCount(1)

  const { addToCart } = useCartActions()
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
        onAction={() => addToCart(id, count)}
      />
    )
  }
}
