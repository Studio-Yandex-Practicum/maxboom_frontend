import styles from './ButtonUp.module.scss'
import IconArrow from '@/assets/icons/IconArrow'
import { FC } from 'react'

interface IconUpProps {
  className?: string
  onClick?: FC
}
const IconUp: FC<IconUpProps> = () => {
  return (
    <div className={styles.topToBtm}>
      <IconArrow styles={styles.iconPosition} type="next" />
    </div>
  )
}

export default IconUp
