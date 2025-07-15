import { Button, ButtonProps, Badge } from '@mantine/core'
import { ReactNode } from 'react'

interface CustomButtonProps extends ButtonProps {
  icon?: ReactNode
  badgeContent?: number
  onClick?: () => void
}

export function CustomButton({ icon, children, badgeContent, ...props }: CustomButtonProps) {
  return (
    <Button
      rightSection={icon ? icon : undefined}
      leftSection={
        badgeContent !== 0 &&
        !!badgeContent && (
          <Badge color="gray" variant="default" radius="50%" h={20} w={20} p={0}>
            {badgeContent}
          </Badge>
        )
      }
      {...props}
      styles={{
        root: {
          fontSize: 16,
          fontWeight: 600,
        },
      }}
    >
      {children}
    </Button>
  )
}
