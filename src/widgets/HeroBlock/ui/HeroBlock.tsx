import { FC } from 'react'

import HeroCard from '@/entities/HeroCard/HeroCard'
import HeroInfo from '@/entities/HeroInfo/HeroInfo'
import Slider from '@/features/Slider/ui/Slider/Slider'
import { heroData } from '@/mockData/heroData'

import styles from './HeroBlock.module.scss'

/**
 * Компонент HeroBlock для перелистывания главных картинок на главной странице.
 */

const HeroBlock: FC = () => {
  return (
    heroData.length !== 0 && (
      <section className={styles.heroBlock}>
        <div className={styles.container}>
          <Slider className={styles.slider}>
            {heroData.map(item => {
              return (
                <HeroCard
                  key={item.id}
                  urlImg={item.urlImg}
                  urlImg_m={item.urlImg_m}
                  alt={item.alt}
                  title={item.title}
                  subTitle={item.subTitle}
                  price={item.price}
                  href={item.href}
                />
              )
            })}
          </Slider>
          <HeroInfo />
        </div>
      </section>
    )
  )
}

export default HeroBlock
