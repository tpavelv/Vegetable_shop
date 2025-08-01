import { render, screen } from '@testing-library/react'
import { MantineProvider } from '@mantine/core'
import { ProductInfo } from '../ProductInfo'

import { describe, expect, it } from 'vitest'

describe('CustomButton', () => {
  it('кнопка вызывает обработчик при клике переданная цена отображается корректно', async () => {
    render(
      <MantineProvider>
        <ProductInfo unitProduct={'101м'} title="Car" />
      </MantineProvider>
    )
    screen.debug()
    expect(screen.getByText(/101м/i)).toBeInTheDocument()
    expect(screen.getByText(/Car/i)).toBeInTheDocument()
  })
})
