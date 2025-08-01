import { render, screen } from '@testing-library/react'

import { CartFooter } from '../CartFooter'

import { describe, expect, it } from 'vitest'

describe('CartFooter', () => {
  it('Должен отобразить подпись Total и 4 ', () => {
    render(<CartFooter totalPrice={4} />)
    screen.debug()
    expect(screen.getByText(/4/i)).toBeInTheDocument()
    expect(screen.getByText(/total/i)).toBeInTheDocument()
  })
})
