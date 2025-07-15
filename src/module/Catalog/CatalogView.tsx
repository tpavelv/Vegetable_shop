import styles from './Catalog.module.scss'
import { ProductCard } from '../../components/ProductCard'
import { Product } from '../../types'

interface CatalogViewProps {
  products: Product[] | number[]
  isLoading: boolean
}

export const CatalogView = ({ products, isLoading }: CatalogViewProps) => {
  return (
    <main className={styles.catalog}>
      <h2>Catalog</h2>
      <ul className={styles['product-list']}>
        {products.map((item, index) => (
          <li key={isLoading ? index : (item as Product).id}>
            <ProductCard product={isLoading ? null : (item as Product)} isLoading={isLoading} />
          </li>
        ))}
      </ul>
    </main>
  )
}
