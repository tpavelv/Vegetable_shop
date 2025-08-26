import { createSlice } from '@reduxjs/toolkit'

interface UiState {
  cartOpen: boolean
}

const initialState: UiState = {
  cartOpen: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onToggleCartOpen(state) {
      state.cartOpen = !state.cartOpen
    },
  },
})

export const { onToggleCartOpen } = uiSlice.actions

export default uiSlice.reducer
