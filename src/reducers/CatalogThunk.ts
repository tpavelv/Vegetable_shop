import { createAsyncThunk } from '@reduxjs/toolkit'
import { Products } from '../types'
import ky from 'ky'

const apiUrl = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'

export const getData = createAsyncThunk<Products, void, { rejectValue: string }>(
  'catalog/getData',
  async function (_, { rejectWithValue }) {
    try {
      const data = await ky.get(apiUrl).json<Products>()
      return data
    } catch (error) {
      return rejectWithValue((error as Error).message)
    }
  }
)
