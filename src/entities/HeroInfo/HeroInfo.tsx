import { FC } from 'react'

import ArrowRightNextPage from '@/assets/icons/ArrowRightNextPage.svg'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'

import img from '../../assets/images/slider/info-slide.png'

import styles from './HeroInfo.module.scss'

/**
 * Entity SliderInfo
 * Карточка для SliderBlock на главной странице.
 */

const HeroInfo: FC = () => {
  function goTo() {}
  return (
    <div className={styles.container}>
      <Subheading>Квадрокоптер</Subheading>
      <Heading type={HeadingType.NORMAL} className={styles.title}>
        DJI Mini 2 Fly More Combo
      </Heading>
      <Button size={ButtonSize.S} theme={ButtonTheme.PRIMARY} className={styles.button}>
        Подробнее
        <ArrowRightNextPage className={styles.icon} />
      </Button>
      <img src={img} alt="товар" className={styles.img} onClick={goTo} />
    </div>
  )
}

export default HeroInfo
