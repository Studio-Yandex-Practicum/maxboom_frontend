import { FC } from 'react'

import IconStar from '@/assets/icons/IconStar'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './AveregeMark.module.scss'
import { STORE_COMMENT } from './model/constants/constants'

interface IAveregeMarkProps {
  deliverySpeedScore: number
  priceScore: number
  qualityScore: number
  score: number
}

/**
 * Widget секции средней оценки магазина
 *
 * @param {number} score  оценка общая
 * @param {number} deliverySpeedScore  оценка за скорость доставки
 * @param {number} priceScore  оценка за цену
 * @param {number} qualityScore  оценка за качество
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
        <Paragraph>{STORE_COMMENT}</Paragraph>
      </div>
    </section>
  )
}
