import { FC } from 'react'

import IconStar from '@/assets/icons/IconStar'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './Mark.module.scss'

interface IMarkProps {
  title: string
  mark: number
}

/**
 * Компонент оценки
 *
 * @param {string} title  название оценки
 * @param {number} mark  оценка
 */
export const Mark: FC<IMarkProps> = ({ title, mark }) => {
  return (
    <li className={styles.mark}>
      <Paragraph className={styles.mark__scorename}>{title}</Paragraph>
      <Paragraph className={styles.mark__score}>
        {mark}
        <IconStar />
      </Paragraph>
    </li>
  )
}
