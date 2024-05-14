import { FC } from 'react'

import CloseIcon from '@/assets/icons/iconHeaderMenuClose.svg'
import { Button } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'

import styles from './ModalHeading.module.scss'

interface IModalHeading {
  handleClose?: () => void
  title?: string
}

/**
 * Переиспользуемый компонент ModalHeading заголовка модальных окон, открывающихся из шапки сайта
 * @param {string} title - заголовок компонента;
 * @param {function} handleClose - функция закрытия модального окна;
 */

const ModalHeading: FC<IModalHeading> = ({ handleClose, title }) => {
  return (
    <div className={styles.modalHeading}>
      <Button onClick={handleClose} className={styles.modalHeading__closeButton}>
        <CloseIcon className={styles.modalHeading__closeIcon} />
      </Button>
      <Heading type={HeadingType.NORMAL} className={styles.modalHeading__title}>
        {title}
      </Heading>
    </div>
  )
}

export default ModalHeading
