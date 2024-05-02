import classNames from 'classnames'
import { Form, Formik } from 'formik'
import { useState, type FC } from 'react'

import SubscribeIcon from '@/assets/images/subscriptionForm/icon-subsc.svg'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'
import { Input, InputSize, InputTheme } from '@/shared/ui/Input/Input'
import Label from '@/shared/ui/Label/Label'

import { validationSchema } from './model/validationSchema/validationSchema'
import styles from './subscribeForm.module.scss'

type TSubscribeForm = {
  type: 'footer' | 'subscribe'
  className?: string
  onSubmit: () => void
}

// @TODO: Перевести форму на Formik + Yup
// https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/91
/**
 * @param {string} type  - определяет внешний вид для компонентов footer и для subscribe
 * @param {string} className - нужно будет, если захотят переиспользовать компонент
 * @param {string} onSubmit - функция для обработки формы
 */
const SubscribeForm: FC<TSubscribeForm> = ({ type, onSubmit, className = '' }) => {
  const [showApiErrorMsg, setShowApiErrorMsg] = useState(false)

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

  const submitHandle = () => {
    onSubmit()
  }

  const onErrorMsgClose = () => {
    setShowApiErrorMsg(false)
  }

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={validationSchema}
      onSubmit={submitHandle}>
      {({ isSubmitting, errors }) => (
        <Form className={`${classNameContainer} ${className}`}>
          <Label htmlFor="subscribe" className={classNameLabel}>
            Подписаться на рассылку
          </Label>
          <div className={classNameForm}>
            <Input name="subscribe" placeholder="Эл.почта" theme={InputTheme.DARK} customSize={InputSize.S} />
            <button className={styles.button} type="submit" disabled={isSubmitting}>
              Подписаться
              <SubscribeIcon className={styles.button__img} />
            </button>
          </div>
          {showApiErrorMsg && (
            <FormMsg
              text={errors.email || 'Ошибка валидации email!'}
              isError={true}
              closeHandel={onErrorMsgClose}
              disableClose={false}
              className={styles.subscribeform__msg}
            />
          )}
        </Form>
      )}
    </Formik>
  )
}

export default SubscribeForm
