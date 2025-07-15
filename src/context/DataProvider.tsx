import { createContext, type ReactNode } from 'react'
import { useGetData } from '../hooks/useGetData/useGetData'
import type { Products } from '../types'

export interface DataContextValue {
  data: Products
  loading: boolean
  error: unknown
}
interface DataContextProviderProps {
  children: ReactNode
}

const DataContext = createContext<DataContextValue | null>(null)

export const DataContextProvider = ({ children }: DataContextProviderProps) => {
  const apiUrl = 'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json'
  const { data, loading, error } = useGetData(apiUrl)
  return <DataContext.Provider value={{ data, loading, error }}>{children}</DataContext.Provider>
}

export { DataContext }
