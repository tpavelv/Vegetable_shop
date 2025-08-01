import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { Stepper } from '../Stepper'

import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

describe('CustomButton', () => {
  it('кнопки вызывают обработчик при клике, переданный count отображается ', async () => {
    const handleClick = vi.fn()
    const handleClickSecond = vi.fn()

    const { container } = render(
      <MantineProvider>
        <Stepper count={321} increment={handleClick} decrement={handleClickSecond} />
      </MantineProvider>
    )
    screen.debug()
    expect(screen.getByText(/321/i)).toBeInTheDocument()

    const buttonPlus = container.querySelector('svg.tabler-icon-plus')
    const buttonMinus = container.querySelector('svg.tabler-icon-minus')

    expect(buttonPlus).not.toBeNull()
    expect(buttonPlus).toBeInTheDocument()
    expect(buttonMinus).not.toBeNull()
    expect(buttonMinus).toBeInTheDocument()

    await userEvent.click(buttonPlus)
    await userEvent.click(buttonMinus)
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClickSecond).toHaveBeenCalledTimes(1)
  })
})
