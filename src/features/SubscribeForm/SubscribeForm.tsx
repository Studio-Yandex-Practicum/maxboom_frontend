import { FC, FormEvent } from 'react'
import SubscribeIcon from '@/assets/images/subscriptionForm/icon-subsc.svg'
import styles from './subscribeForm.module.scss'
import { Input, InputSize, InputTheme } from '@/shared/ui/Input/Input'
import classNames from 'classnames'

type TSubscribeForm = {
  type: 'footer' | 'subscribe'
  className?: string
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

// @TODO: Перевести форму на Formik + Yup
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/91
/**
 * @param {string} type  - определяет внешний вид для компонентов footer и для subscribe
 * @param {string} className - нужно будет, если захотят переиспользовать компонент
 * @param {string} onSubmit - функция для обработки формы
 */
const SubscribeForm: FC<TSubscribeForm> = ({ type, onSubmit, className = '' }) => {
  const classNameContainer = classNames(styles.container, {
    [styles.container]: true,
    [styles.container_footer]: type === 'footer',
    [styles.container_subscribe]: type === 'subscribe'
  })
  const classNameLabel = classNames({
    [styles.label]: true,
    [styles.label_footer]: type === 'footer',
    [styles.label_subscribe]: type === 'subscribe'
  })
  const classNameForm = classNames({
    [styles.form]: true,
    [styles.form_footer]: type === 'footer',
    [styles.form_subscribe]: type === 'subscribe'
  })

  return (
    <div className={`${classNameContainer} ${className}`}>
      {/* @TODO: Добавить компонент Label
      https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/102 */}
      <label className={classNameLabel}>Подписаться на рассылку</label>
      <p className={styles.caption}>Мы не будем присылать вам спам. Только скидки и выгодные предложения</p>
      <form className={classNameForm} onSubmit={onSubmit}>
        <Input name="subscribe" placeholder="Эл.почта" theme={InputTheme.DARK} customSize={InputSize.S} />
        <button className={styles.button}>
          Подписаться
          <SubscribeIcon className={styles.button__img} />
        </button>
      </form>
    </div>
  )
}

export default SubscribeForm
