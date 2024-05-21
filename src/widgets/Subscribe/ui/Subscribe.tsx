import { FC } from 'react'

import imgSubs from '@/assets/images/subscribe/img-subsc-small.png'
import SubscribeForm from '@/features/SubscribeForm/SubscribeForm'

import styles from './Subscribe.module.scss'

/**
 * Компонент Subscribe отрисовывается на главной странице MainPage, содержит в себе форму подписки на рассылку SubscribeForm
 */

const Subscribe: FC = () => {
  const onSubmitHandler = () => {}

  return (
    <section className={styles.subscribe}>
      <SubscribeForm type="subscribe" onSubmit={onSubmitHandler} />
      <img src={imgSubs} alt="Скидки для подписчиков до 50%" className={styles.subscribe__image} />
    </section>
  )
}

export default Subscribe
