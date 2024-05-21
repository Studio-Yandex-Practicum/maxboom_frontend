import { FC } from 'react'

import AdvantageCard from '@/entities/AdvantageCard'
import { advantagesData } from '@/mockData/advantagesData'
import Scroll from '@/shared/ui/Scroll/Scroll'

import styles from './advantages.module.scss'

/**
 * Компонент Advantages содержит карточки достоинств магазина. Показывается на главной странице MainPage и странице товара ProductPage.
 */

const Advantages: FC = () => {
  return (
    <section className={styles.advantages}>
      <Scroll>
        {advantagesData.map((item, index) => (
          <li key={index}>
            <AdvantageCard image={item.image} alt={item.alt} name={item.name} />
          </li>
        ))}
      </Scroll>
    </section>
  )
}
export default Advantages
