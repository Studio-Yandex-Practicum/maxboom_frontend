import classNames from 'classnames'
import { Field, Form, Formik } from 'formik'
import { type FC } from 'react'

import SubscribeIcon from '@/assets/images/subscriptionForm/icon-subsc.svg'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'
import Label from '@/shared/ui/Label/Label'

import { validationSchema } from './model/validationSchema/validationSchema'
import styles from './subscribeForm.module.scss'

type TSubscribeForm = {
  type: 'footer' | 'subscribe'
  className?: string
  onSubmit: () => void
}

/**
 * @param {string} type  - определяет внешний вид для компонентов footer и для subscribe
 * @param {string} className - для переопределения стилей <Form/>
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
  const classNameField = classNames({
    [styles.field]: true,
    [styles.field_footer]: type === 'footer',
    [styles.field_subscribe]: type === 'subscribe'
  })

  const submitHandle = () => {
    //@TODO: Доделать после появления эндпоинта на BE
    onSubmit()
  }

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={validationSchema}
      onSubmit={submitHandle}>
      {({ isSubmitting, errors, resetForm, touched }) => (
        <Form className={`${classNameContainer} ${className}`}>
          <Label htmlFor={`email_${type}`} className={classNameLabel}>
            Подписаться на рассылку
          </Label>
          <div className={classNameForm}>
            <Field
              id={`email_${type}`}
              name="email"
              type="email"
              className={classNameField}
              placeholder="Эл. почта"
            />
            <button className={styles.button} type="submit" disabled={isSubmitting}>
              Подписаться
              <SubscribeIcon className={styles.button__img} />
            </button>
          </div>
          {touched.email && errors.email && (
            <FormMsg
              text={errors.email || 'Ошибка валидации email!'}
              isError={true}
              closeHandel={resetForm}
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
