import styles from './Subscribe.module.scss'
import imgSubs from '@/assets/images/img-subsc-small.png'
import SubscribeForm from '../../entities/SubscribeForm/SubscribeForm'

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
