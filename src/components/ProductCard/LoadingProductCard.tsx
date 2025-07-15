import { Card, Box } from '@mantine/core'
import { CustomLoader } from '../../UI/loader/loader'

export const LoadingProductCard = () => {
  return (
    <Card padding="md" radius="lg" w={302} h={414}>
      <Card.Section>
        <Box p="md" h={276}>
          <CustomLoader />
        </Box>
      </Card.Section>
    </Card>
  )
}
