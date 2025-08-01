import { render, screen, within } from '@testing-library/react'
import { Shop } from '../Shop'
import { CartContextProvider } from '../../../context/CartContext'
import { DataContextProvider } from '../../../context/DataProvider'
import { MantineProvider } from '@mantine/core'

import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Shop', () => {
  beforeEach(() => {
    render(
      <DataContextProvider>
        <CartContextProvider>
          <MantineProvider>
            <Shop />
          </MantineProvider>
        </CartContextProvider>
      </DataContextProvider>
    )
  })

  it('должен отображать пустую корзину при клике на кнопку корзины при первой загрузке и закрывать корзину при повторном клике', async () => {
    const cartButton = screen.getByText(/cart/i)
    expect(cartButton).toBeInTheDocument()
    await userEvent.click(cartButton)
    expect(await screen.findByText(/your cart is empty/i)).toBeInTheDocument()
    await userEvent.click(cartButton)
    expect(screen.queryByText(/your cart is empty/i)).not.toBeInTheDocument()
  })

  it('должен отображать счетчик в кнопке корзины ', async () => {
    const cartButton = screen.getByRole('button', { name: 'Cart' })
    const card = await screen.findByTestId('card-Brocolli')
    const addButton = within(card).getByRole('button', { name: /add to cart/i })

    await userEvent.click(addButton)
    const count = within(cartButton).getByText('1')

    expect(count).toBeInTheDocument()
  })

  it('должен увеличивать счетчик в карточке товара', async () => {
    const card = await screen.findByTestId('card-Brocolli')
    const plusButton = within(card).getAllByRole('button')[1]
    await userEvent.click(plusButton)
    await userEvent.click(plusButton)

    const count = within(card).getByText('3')

    expect(count).toBeInTheDocument()
  })

  it('должен отображать в корзине 1 товар в количестве 3 с итоговой стоимостью 360 ', async () => {
    const card = await screen.findByTestId('card-Brocolli')
    expect(card).toBeInTheDocument()

    const cartButton = screen.getByRole('button', { name: 'Cart' })

    const addButton = within(card).getByRole('button', { name: /add to cart/i })
    const plusButton = within(card).getAllByRole('button')[1]
    await userEvent.click(plusButton)
    await userEvent.click(plusButton)
    await userEvent.click(addButton)

    await userEvent.click(cartButton)
    const cartFilled = await screen.findByTestId('cart-filled')
    const title = within(cartFilled).getByText(/brocolli/i)
    const counter = within(cartFilled).getByText('3')
    const total = within(cartFilled).getByText(/total/i)
    const totalCount = within(cartFilled).getByText(/360/i)

    expect(title).toBeInTheDocument()
    expect(counter).toBeInTheDocument()
    expect(total).toBeInTheDocument()
    expect(totalCount).toBeInTheDocument()
  })
})
