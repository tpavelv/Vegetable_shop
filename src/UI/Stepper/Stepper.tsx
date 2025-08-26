import { Group, ActionIcon, Text } from '@mantine/core'

import { IconMinus, IconPlus } from '@tabler/icons-react'

interface StepperProps {
  count: number
  increment: () => void
  decrement: () => void
}
export const Stepper = ({ count, increment, decrement }: StepperProps) => {
  return (
    <Group gap={10} style={{ minWidth: 90 }}>
      <ActionIcon variant="light" color="gray" size={30} radius="md" onClick={decrement}>
        <IconMinus size={12} stroke={5} color="black" />
      </ActionIcon>

      <Text data-testid="product-count">{count}</Text>

      <ActionIcon variant="light" color="gray" size={30} radius="md" onClick={increment}>
        <IconPlus size={12} stroke={5} color="black" />
      </ActionIcon>
    </Group>
  )
}
