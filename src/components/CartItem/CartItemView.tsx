import styles from './CartItem.module.scss'

import { Card, Image, Box, Text } from '@mantine/core'
import { ProductInfo } from '../../UI/ProductInfo'
import { Stepper } from '../../UI/Stepper/Stepper'

interface CartItemViewProps {
  image: string
  title: string
  unitProduct: string
  price: number
  productCount: number
  onIncrement: () => void
  onDecrement: () => void
}

export const CartItemView = ({
  image,
  title,
  unitProduct,
  price,
  productCount,
  onIncrement,
  onDecrement,
}: CartItemViewProps) => {
  return (
    <div>
      <Card h={80} className={styles.cartItem} w={396}>
        <Box w={64} h={64}>
          <Image src={image} alt={title} radius="sm" />
        </Box>
        <Box className={styles.cartItemInfoWrap}>
          <Box className={styles.productInfo}>
            <ProductInfo unitProduct={unitProduct} title={title} />
            <Text fw={600} size="xl">{`${price} $`}</Text>
          </Box>

          <Box className={styles.stepper}>
            <Stepper count={productCount} increment={onIncrement} decrement={onDecrement} />
          </Box>
        </Box>
      </Card>
    </div>
  )
}
