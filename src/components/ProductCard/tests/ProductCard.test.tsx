import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ProductCard } from '../ProductCard'
import { beforeEach, describe, vi, it, expect } from 'vitest'
import React from 'react'
import CartContext from '../../../context/CartContext'
import { MantineProvider } from '@mantine/core'

vi.mock('../../../hooks/useCount/useCount', () => ({
  useCount: () => ({
    count: 2,
    onIncrement: vi.fn(),
    onDecrement: vi.fn(),
  }),
}))

describe('ProductCard', () => {
  const onAddToCard = vi.fn()

  const renderWithProvider = (children: React.ReactNode) => {
    return render(
      <CartContext.Provider
        value={{
          cartData: [],
          incrementProductCount: vi.fn(),
          decrementProductCount: vi.fn(),
          onDeleteFromCart: vi.fn(),

          cartOpen: false,
          onToggleCartOpen: vi.fn(),
          onAddToCard,
        }}
      >
        {children}
      </CartContext.Provider>
    )
  }

  const product = {
    id: 5,
    name: 'Test Title - 1 kg',
    price: 99,
    image: 'test-image.jpg',
    category: 'Veg',
  }

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('отображает <LoadingProductCard />, если product = null', () => {
    renderWithProvider(
      <MantineProvider>
        <ProductCard product={null} isLoading={false} data-testid={'loading-product-card'} />
      </MantineProvider>
    )
    expect(screen.getByTestId('loading-product-card')).toBeInTheDocument()
  })

  it('отображает <LoadingProductCard />, если isLoading = true', () => {
    renderWithProvider(
      <MantineProvider>
        <ProductCard product={product} isLoading={true} />
      </MantineProvider>
    )
    expect(screen.getByTestId('loading-product-card')).toBeInTheDocument()
  })

  it('отображает данные продукта при передаче product и isLoading=false', () => {
    renderWithProvider(
      <MantineProvider>
        <ProductCard product={product} isLoading={false} />
      </MantineProvider>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('1 kg')).toBeInTheDocument()
    expect(screen.getByText(/99/)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'test-image.jpg')
  })

  it('вызывает onAddToCard при клике на кнопку действия', async () => {
    const user = userEvent.setup()

    renderWithProvider(
      <MantineProvider>
        <ProductCard product={product} isLoading={false} />
      </MantineProvider>
    )

    const button = screen.getByRole('button', { name: /add to cart/i })
    await user.click(button)
    expect(onAddToCard).toHaveBeenCalledTimes(1)
    expect(onAddToCard).toHaveBeenCalledWith(product.id, 2)
  })
})
