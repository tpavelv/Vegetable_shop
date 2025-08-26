import { CatalogView } from './CatalogView'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux/redux'
import { useEffect } from 'react'
import { getData } from '../../reducers/CatalogThunk'

const SKELETON_COUNT = 8

export const Catalog = () => {
  const dispatch = useTypedDispatch()
  useEffect(() => {
    dispatch(getData())
  }, [dispatch])

  const { data, loading } = useTypedSelector((state) => state.catalog)

  const items = loading ? Array.from({ length: SKELETON_COUNT }, (_, i) => i) : data

  return <CatalogView products={items} isLoading={loading} />
}
