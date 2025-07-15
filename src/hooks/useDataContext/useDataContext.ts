import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import type { DataContextValue } from '../../context/DataProvider'

export const useDataContext = (): DataContextValue => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useDataContext must be used within a DataContextProvider')
  }
  return context
}
