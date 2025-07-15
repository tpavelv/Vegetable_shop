import styles from './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <span>Vegetable</span>
      <span className={styles['logo-right-area']}>SHOP</span>
    </div>
  )
}
