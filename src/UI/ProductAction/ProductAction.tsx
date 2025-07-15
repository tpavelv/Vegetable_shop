import { Text, Group } from '@mantine/core'
import { CustomButton } from '../../UI/CustomButton/CustomButton'
import { IconShoppingCart } from '@tabler/icons-react'

interface ProductActionProps {
  price: number
  onAction: () => void
}

export const ProductAction = ({ price, onAction }: ProductActionProps) => {
  return (
    <Group mt="md" mb="xs" justify="space-between">
      <Text fw={600} size="lg">
        {`$ ${price}`}
      </Text>
      <CustomButton variant="light" px={40} py={10} icon={<IconShoppingCart size={20} />} onClick={onAction}>
        Add to cart
      </CustomButton>
    </Group>
  )
}
