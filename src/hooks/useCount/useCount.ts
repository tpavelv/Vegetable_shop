import { useState } from 'react'

export const useCount = (value: number) => {
  const [count, setCount] = useState(value)
  const onIncrement = () => {
    setCount((prev) => prev + 1)
  }
  const onDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0))
  }
  return { count, onIncrement, onDecrement }
}
