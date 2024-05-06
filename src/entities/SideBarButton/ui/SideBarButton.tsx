import { FC } from 'react'

import CategoryIcon from '@/assets/images/sideBarMenu/iconCategory.svg'
import { Button, ButtonDesign, ButtonSize } from '@/shared/ui/Button/Button'

import styles from './SideBarButton.module.scss'

interface ISideBarButton {
  onClick: () => void
}

/**
 * Компонент кнопки "Меню" - для адаптива Side Bar Menu
 * @param {function} onClick - функция клика для открытия модального окна SideBarMenuModal
 */

const SideBarButton: FC<ISideBarButton> = ({ onClick }) => {
  return (
    <Button
      design={ButtonDesign.SQUARE}
      size={ButtonSize.S}
      type="button"
      onClick={onClick}
      className={styles.sideBarButton}>
      <span>Меню</span>
      <CategoryIcon />
    </Button>
  )
}

export default SideBarButton
