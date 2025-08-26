import styles from './CartFooter.module.scss'

interface CartFooterProps {
  totalPrice: number
}

export const CartFooter = ({ totalPrice }: CartFooterProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Total</span>
      <span className={styles.amount} data-testid="total-count">{`${totalPrice} $`}</span>
    </div>
  )
}
