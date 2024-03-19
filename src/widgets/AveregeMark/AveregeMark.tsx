import { FC } from 'react'

import IconStar from '@/assets/icons/IconStar'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './AveregeMark.module.scss'

interface IAveregeMarkProps {
  deliverySpeedScore: number
  priceScore: number
  qualityScore: number
  score: number
}

/**
 * Widget секции средней оценки магазина
 * @param score {number} оценка общая
 * @param deliverySpeedScore {number} оценка за скорость доставки
 * @param priceScore {number} оценка за цену
 * @param qualityScore {number} оценка за качество
 */
export const AveregeMark: FC<IAveregeMarkProps> = ({
  deliverySpeedScore,
  priceScore,
  qualityScore,
  score
}) => {
  return (
    <section className={styles.aveargemark}>
      <div className={styles.aveargemark__markcontainer}>
        <Paragraph className={styles.aveargemark__commonscore}>
          {score}
          <IconStar />
        </Paragraph>
        <Heading className={styles.aveargemark__header}>Рейтинг нашего магазина</Heading>
        <ul className={styles.aveargemark__scores}>
          <li className={styles.aveargemark__line}>
            <Paragraph className={styles.aveargemark__scorename}>Скорость доставки</Paragraph>
            <Paragraph className={styles.aveargemark__score}>
              {deliverySpeedScore}
              <IconStar />
            </Paragraph>
          </li>
          <li className={styles.aveargemark__line}>
            <Paragraph className={styles.aveargemark__scorename}>Цена</Paragraph>
            <Paragraph className={styles.aveargemark__score}>
              {priceScore}
              <IconStar />
            </Paragraph>
          </li>
          <li className={styles.aveargemark__line}>
            <Paragraph className={styles.aveargemark__scorename}>Качество товара</Paragraph>
            <Paragraph className={styles.aveargemark__score}>
              {qualityScore}
              <IconStar />
            </Paragraph>
          </li>
        </ul>
      </div>
      <div className={styles.aveargemark__commentcontainer}>
        <Paragraph>
          Мы очень им гордимся, это результат упорного труда в течение длительного времени, и сейчас наша
          команда ежедневно работает над улучшением сервиса.
        </Paragraph>
      </div>
    </section>
  )
}
