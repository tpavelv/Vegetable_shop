import styles from './Header.module.scss'
import { Logo } from '../../UI/Logo/Logo'
import { CustomButton } from '../../UI/CustomButton/CustomButton'
import { IconShoppingCart } from '@tabler/icons-react'

// import { useCart } from '../../hooks/useCartContext/useCart'

import { onToggleCartOpen } from '../../reducers/UiSlice'
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux/redux'

export const Header = () => {
  const dispatch = useTypedDispatch()

  const handleToggleCart = () => {
    dispatch(onToggleCartOpen())
  }

  const cartData = useTypedSelector((state) => state.cart.cartData)
  return (
    <header className={styles.header}>
      <Logo />
      <CustomButton
        badgeContent={cartData.length}
        px={40}
        py={10}
        icon={<IconShoppingCart size={20} />}
        onClick={handleToggleCart}
      >
        Cart
      </CustomButton>
    </header>
  )
}
