import { combineReducers, configureStore } from '@reduxjs/toolkit'
import uiReducer from '../reducers/UiSlice'
import cartReducer from '../reducers/CartSlice'
import catalogReducer from '../reducers/CatalogSlice'

const rootReducer = combineReducers({
  ui: uiReducer,
  catalog: catalogReducer,
  cart: cartReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
