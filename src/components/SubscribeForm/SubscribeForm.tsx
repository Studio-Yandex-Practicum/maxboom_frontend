import styles from './subscribeForm.module.scss'
import React, { FC, FormEvent } from 'react'
import subscription from '../../images/footer/icon-subsc.svg'

type TSubscribeForm = {
  type: 'footer' | 'subscribe'
  className?: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

/**
 * @param {string} type  - определяет внешний вид для компонентов footer и для subscribe
 * @param {string} className - нужно будет, если захотят переиспользовать компонент
 * @param {string} onSubmit - функция для обработки формы
 */

const SubscribeForm: FC<TSubscribeForm> = ({ className, type, onSubmit }) => {
  let classNameLabel = styles.label_footer
  if (type === 'subscribe') {
    classNameLabel = styles.label_subscribe
  }

  let classNameForm = styles.form_footer
  if (type === 'subscribe') {
    classNameForm = styles.form_subscribe
  }
  let classNameInput = styles.input_footer
  if (type === 'subscribe') {
    classNameInput = styles.input_subscribe
  }
  return (
    <div className={`${styles.container} ${className}`}>
      <label className={`${styles.label} ${classNameLabel}`}>Подписаться на рассылку</label>

      <form className={`${styles.form} ${classNameForm}`} onSubmit={onSubmit}>
        <input
          name="search"
          type="text"
          placeholder="Эл.почта"
          className={`${styles.input} ${classNameInput}`}
          autoComplete="off"
        />
        <button className={`${styles.button}`}>
          Подписаться
          <img src={subscription} alt="subscription" className={`${styles.button__img}`} />
        </button>
      </form>
    </div>
  )
}

export default SubscribeForm
