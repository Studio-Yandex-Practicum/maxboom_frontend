import styles from './ButtonUp.module.scss'
import IconArrow from '@/assets/icons/IconArrow'
import { FC } from 'react'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
interface IconUpProps {
  className?: string
  goToTop?: React.MouseEventHandler<HTMLButtonElement>
}
/*
 * Компонент кнопки Вверх
 */
const IconUp: FC<IconUpProps> = props => {
  const { goToTop } = props
  return (
    <div className={styles.top__tobtm}>
      <Button
        onClick={goToTop}
        size={ButtonSize.S}
        theme={ButtonTheme.PRIMARY}
        className={styles.icon__position}
        type="submit">
        <IconArrow styles={styles.icon__position} type="next" />
      </Button>
    </div>
  )
}

export default IconUp
