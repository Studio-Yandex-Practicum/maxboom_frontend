import React from 'react'
import styles from './Subscribe.module.scss'
import imgSubs from '../../assets/images/img-subsc-small.png'
import Input from '../Input/Input'

const Subscribe = () => {
  const handleSubmit = (value: string) => {
    // e.preventDefault()
    console.log(value)
    // onSubmit(value)
  }

  return (
    <section className={styles.subscribe}>
      <div className={styles.container}>
        <form
          className={styles.subscribeForm}
          // onSubmit={handleSubmit} // доработать
        >
          <label className={styles.label}>Подписаться на рассылку</label>
          <span className={styles.caption}>Мы не будем присылать вам спам. Только скидки и выгодные предложения</span>
          <Input
            type="text"
            placeholder="Эл. почта "
            title="Подписаться"
            icon="#icon-subsc"
            className="subs"
            onSubmit={handleSubmit}
          />
        </form>
        <img src={imgSubs} alt="Скидки для подписчиков до 50%" className={styles.subscriptionImage} />
      </div>
    </section>
  )
}

export default Subscribe
