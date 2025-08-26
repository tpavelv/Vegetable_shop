import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../types'
import { getData } from './CatalogThunk'

interface CatalogState {
  data: Product[]
  loading: boolean
  error: string | null
}
const initialState: CatalogState = {
  data: [],
  loading: false,
  error: null,
}
export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload ?? 'Неизвестная ошибка'
    })
  },
})

export default catalogSlice.reducer
