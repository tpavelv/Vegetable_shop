import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { CustomButton } from '../CustomButton'
import { IconShoppingCart } from '@tabler/icons-react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

describe('CustomButton', () => {
  it('renders button with content and icon', () => {
    render(
      <MantineProvider>
        <CustomButton
          badgeContent={3}
          px={40}
          py={10}
          icon={<IconShoppingCart data-testid="cart-icon" size={20} />}
          onClick={() => {}}
        >
          Open Cart
        </CustomButton>
      </MantineProvider>
    )
    screen.debug()
    expect(screen.getByText(/open cart/i)).toBeInTheDocument()
    expect(screen.getByTestId('cart-icon')).toBeInTheDocument()
  })
  it('кнопка вызывает обработчик при клике', async () => {
    const handleClick = vi.fn()

    render(
      <MantineProvider>
        <CustomButton onClick={handleClick}>Нажми меня</CustomButton>
      </MantineProvider>
    )

    const button = screen.getByRole('button', { name: /нажми меня/i })

    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
