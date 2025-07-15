import { Text, Group } from '@mantine/core'
interface ProductInfoProps {
  unitProduct: string
  title: string
}
export const ProductInfo = ({ unitProduct, title }: ProductInfoProps) => {
  return (
    <Group justify="space-between">
      <Group gap={12}>
        <Text fw={600} size="lg">
          {title}
        </Text>
        <Text fw={500} c="gray" size="sm">
          {unitProduct}
        </Text>
      </Group>
    </Group>
  )
}
