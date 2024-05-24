import { FC } from 'react'

import AdvantageCard from '@/entities/AdvantageCard'
import { advantagesData } from '@/mockData/advantagesData'

import styles from './advantages.module.scss'

/**
 * Компонент Advantages содержит карточки достоинств магазина. Показывается на главной странице MainPage и странице товара ProductPage.
 */

const Advantages: FC = () => {
  return (
    advantagesData && (
      <section className={styles.advantages}>
        <ul className={styles.cards}>
          {advantagesData.map((item, index) => (
            <li key={index}>
              <AdvantageCard image={item.image} alt={item.alt} name={item.name} />
            </li>
          ))}
        </ul>
      </section>
    )
  )
}
export default Advantages
