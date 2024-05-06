import classNames from 'classnames'
import { Field, Form, Formik, FormikErrors, FormikTouched } from 'formik'
import { FormEvent, useState, type FC } from 'react'

import SubscribeIcon from '@/assets/images/subscriptionForm/icon-subsc.svg'
import { useResize } from '@/shared/libs/hooks/useResize'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'
import { EMsgType } from '@/shared/ui/FormMsg/model/types/types'
import Label from '@/shared/ui/Label/Label'
import Span from '@/shared/ui/Span/Span'

import { validationSchema } from './model/validationSchema/validationSchema'
import styles from './SubscribeForm.module.scss'

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
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const { isScreenLg, isScreenMd, isScreenSm } = useResize()

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
  const classNameSpan = classNames({
    [styles.span]: true,
    [styles.span_footer]: type === 'footer',
    [styles.span_subscribe]: type === 'subscribe'
  })

  const submitHandle = () => {
    //@TODO: Доделать после появления эндпоинта на BE
    onSubmit()
  }

  const preSubmitHandle = (
    e: FormEvent<HTMLFormElement>,
    touched: FormikTouched<{
      email: string
    }>,
    errors: FormikErrors<{
      email: string
    }>
  ) => {
    e.preventDefault()
    setShowErrorMsg(Boolean(touched.email && errors.email))
  }

  return (
    <Formik
      initialValues={{
        email: ''
      }}
      validationSchema={validationSchema}
      onSubmit={submitHandle}>
      {({ isSubmitting, errors, touched }) => (
        <Form
          className={`${classNameContainer} ${className}`}
          onSubmit={e => {
            preSubmitHandle(e, touched, errors)
          }}>
          <Label htmlFor={`email_${type}`} className={classNameLabel}>
            Подписаться на рассылку
          </Label>
          {(isScreenSm || isScreenMd) && !isScreenLg && (
            <Span className={classNameSpan}>
              Мы не будем присылать вам спам. Только скидки и выгодные предложения
            </Span>
          )}
          <div className={classNameForm}>
            <Field
              id={`email_${type}`}
              name="email"
              type="text"
              className={classNameField}
              placeholder="Эл. почта"
            />
            <button className={styles.button} type="submit" disabled={isSubmitting}>
              Подписаться
              <SubscribeIcon className={styles.button__img} />
            </button>
          </div>
          {showErrorMsg && errors.email && (
            <FormMsg
              text={errors.email || 'Ошибка валидации email!'}
              isError={true}
              closeHandle={() => {
                setShowErrorMsg(false)
              }}
              disableClose={false}
              type={EMsgType.popup}
            />
          )}
        </Form>
      )}
    </Formik>
  )
}

export default SubscribeForm
