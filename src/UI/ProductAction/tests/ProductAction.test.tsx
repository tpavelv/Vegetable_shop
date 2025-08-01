import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { ProductAction } from '../ProductAction'

import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

describe('CustomButton', () => {
  it('кнопка вызывает обработчик при клике переданная цена отображается корректно', async () => {
    const handleClick = vi.fn()

    render(
      <MantineProvider>
        <ProductAction price={100} onAction={handleClick} />
      </MantineProvider>
    )
    screen.debug()
    expect(screen.getByText(/100/i)).toBeInTheDocument()

    const button = screen.getByRole('button', { name: /add to cart/i })

    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
