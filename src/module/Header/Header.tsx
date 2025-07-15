import styles from './Header.module.scss'
import { Logo } from '../../UI/Logo/Logo'
import { CustomButton } from '../../UI/CustomButton/CustomButton'
import { IconShoppingCart } from '@tabler/icons-react'

import { useCart } from '../../hooks/useCartContext/useCart'

export const Header = () => {
  const { cartData, onToggleCartOpen } = useCart()

  return (
    <header className={styles.header}>
      <Logo />
      <CustomButton
        badgeContent={cartData.length}
        px={40}
        py={10}
        icon={<IconShoppingCart size={20} />}
        onClick={onToggleCartOpen}
      >
        Cart
      </CustomButton>
    </header>
  )
}
