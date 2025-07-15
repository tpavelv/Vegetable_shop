import { CatalogView } from './CatalogView'
import { useDataContext } from '../../hooks/useDataContext/useDataContext'

const SKELETON_COUNT = 8

export const Catalog = () => {
  const { data, loading } = useDataContext()
  const items = loading ? Array.from({ length: SKELETON_COUNT }, (_, i) => i) : data

  return <CatalogView products={items} isLoading={loading} />
}
