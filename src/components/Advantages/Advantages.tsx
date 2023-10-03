import React from 'react'
import styles from './advantages.module.scss'
import img1 from '../../assets/images/advantages/img1.svg'
import img2 from '../../assets/images/advantages/img2.svg'
import img3 from '../../assets/images/advantages/img3.svg'
import img4 from '../../assets/images/advantages/img4.svg'
import img5 from '../../assets/images/advantages/img5.svg'
import img6 from '../../assets/images/advantages/img6.svg'
import AdvantageCard from '../AdvantageCard/AdvantageCard'

function Advantages() {
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.cards}`}>
        <AdvantageCard src={img1}>Бесплатная доставка</AdvantageCard>
        <AdvantageCard src={img2}>Бонусы за покупку</AdvantageCard>
        <AdvantageCard src={img3}>Гарантированный возврат и обмен</AdvantageCard>
        <AdvantageCard src={img4}>Сертификаты на все товары</AdvantageCard>
        <AdvantageCard src={img5}>Сертификаты на все товары</AdvantageCard>
        <AdvantageCard src={img6}>Гарантийное обслуживание</AdvantageCard>
      </div>
    </section>
  )
}

export default Advantages
