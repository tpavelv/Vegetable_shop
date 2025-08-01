import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { CartItem } from '../CartItem'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

const stab = {
  image: 'https://res.cloudinary.com/sivadass/image/upload/v1493620046/dummy-products/cauliflower.jpg',
  title: 'Cauliflower',
  unitProduct: '1 Kg',
  price: 60,
  productCount: 123,
  id: 967,
}

describe('CartItemView', () => {
  it('Должен отобразить переданные пропсы', () => {
    render(
      <MantineProvider>
        <CartItem {...stab} />
      </MantineProvider>
    )

    expect(screen.getByText(/60/i)).toBeInTheDocument()
    expect(screen.getByText(/1 Kg/i)).toBeInTheDocument()
    expect(screen.getByText(/Cauliflower/i)).toBeInTheDocument()
    expect(screen.getByText(/123/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Cauliflower/i)).toBeInTheDocument()
  })
  it('Должен вызывать обработчик при клике на каждую кнопку', async () => {
    const handleClickInc = (id: number) => alert(id)
    const handleClickDec = vi.fn()
    render(
      <MantineProvider>
        <CartItem {...stab} />
      </MantineProvider>
    )

    const buttons = screen.getAllByRole('button')

    await userEvent.click(buttons[0])
    await userEvent.click(buttons[1])
    await userEvent.click(buttons[1])
    expect(handleClickDec).toHaveBeenCalledTimes(1)
    expect(handleClickInc).toHaveBeenCalledTimes(2)
  })
})
