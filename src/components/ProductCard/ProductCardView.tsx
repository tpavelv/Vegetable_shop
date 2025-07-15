import styles from './ProductCard.module.scss'
import { Card, Image, Box } from '@mantine/core'
import { ProductAction } from '../../UI/ProductAction'
import { ProductInfo } from '../../UI/ProductInfo'
import { Stepper } from '../../UI/Stepper/Stepper'

interface ProductCardViewProps {
  image: string
  title: string
  unitProduct: string
  price: number
  count: number
  onIncrement: () => void
  onDecrement: () => void
  onAction: () => void
}

export const ProductCardView = ({
  title,
  unitProduct,
  price,
  image,
  count,
  onIncrement,
  onDecrement,
  onAction,
}: ProductCardViewProps) => {
  return (
    <div>
      <Card padding="md" radius="lg" w={302} h={414}>
        <Card.Section>
          <Box p="md">
            <Image src={image} alt={title} radius="sm" />
          </Box>
        </Card.Section>
        <Box className={styles.productInfo}>
          <ProductInfo unitProduct={unitProduct} title={title} />
          <Stepper count={count} increment={onIncrement} decrement={onDecrement} />
        </Box>
        <ProductAction price={price} onAction={onAction} />
      </Card>
    </div>
  )
}
