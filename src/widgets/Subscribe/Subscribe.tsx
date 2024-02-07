import SubscribeForm from '@/features/SubscribeForm/SubscribeForm'

import imgSubs from './images/img-subsc-small.png'
import styles from './Subscribe.module.scss'

const Subscribe = () => {
  const onSubmitHandler = () => {}

  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <SubscribeForm type="subscribe" onSubmit={onSubmitHandler} />
        <img src={imgSubs} alt="Скидки для подписчиков до 50%" className={styles.subscriptionImage} />
      </div>
    </section>
  )
}

export default Subscribe
