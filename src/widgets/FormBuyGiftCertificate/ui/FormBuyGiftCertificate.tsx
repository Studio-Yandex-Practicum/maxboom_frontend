import { Field, ErrorMessage, Formik, Form } from 'formik'

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import { Input } from '@/shared/ui/Input/Input'
import Label from '@/shared/ui/Label/Label'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import { Textarea } from '@/shared/ui/Textarea/Textarea'

import { IFormBuyGiftCertificate } from '../model/types/types'
import { validationSchema } from '../model/validation/validation'

import styles from './FormBuyGiftCertificate.module.scss'

/**
 * Форма покупки подарочного сертификата
 */

const initialValues: IFormBuyGiftCertificate = {
  recipientName: '',
  recipientEmail: '',
  name: '',
  email: '',
  textArea: '',
  sum: 1,
  radio: '',
  checkbox: ''
}

const radioOptions = [
  { label: 'День рождения', value: 'День рождения' },
  { label: 'Другое', value: 'Другое' },
  { label: 'Новый год', value: 'Новый год' }
]

const FormBuyGiftCertificate = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(JSON.stringify(values, null, 2))
        setSubmitting(false)
        resetForm()
      }}
      validationSchema={validationSchema}
      validateOnBlur={true}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Paragraph className={styles.form__paragraph}>
            Подарочный сертификат будет отправлен получателю после того как Вы оплатите стоимость Подарочного
            сертификата.
          </Paragraph>

          <Label htmlFor="recipientName" className={styles.form__label}>
            Имя получателя
            <Field
              className={styles.form__input}
              as={Input}
              label="Имя получателя"
              name="recipientName"
              id="recipientName"
              placeholder="Имя получателя"
              required
            />
            <ErrorMessage name="recipientName" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="recipientEmail" className={styles.form__label}>
            Email получателя
            <Field
              className={styles.form__input}
              as={Input}
              label="Email получателя"
              name="recipientEmail"
              id="recipientEmail"
              placeholder="Email получателя"
              required
            />
            <ErrorMessage name="recipientEmail" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="name" className={styles.form__label}>
            Ваше имя
            <Field
              className={styles.form__input}
              as={Input}
              label="Ваше имя"
              name="name"
              id="name"
              placeholder="Ваше имя"
              required
            />
            <ErrorMessage name="name" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="email" className={styles.form__label}>
            Ваш Email
            <Field
              className={styles.form__input}
              as={Input}
              label="Ваш Email"
              name="email"
              id="email"
              placeholder="Ваш Email"
              required
            />
            <ErrorMessage name="email" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="radio" className={`${styles.form__label} ${styles.form__label_radio}`}>
            Тема подарочного сертификата
            <ul>
              {radioOptions.map(option => {
                return (
                  <li key={option.value}>
                    <Checkbox
                      className={styles.form__radio}
                      htmlFor="radio"
                      label={option.label}
                      name="radio"
                      value={option.value}
                    />
                  </li>
                )
              })}
            </ul>
            <ErrorMessage
              name="radio"
              component="div"
              className={`${styles.form__error} ${styles.form__error_radio}`}
            />
          </Label>

          <Label
            htmlFor="message"
            className={`${styles.form__label} ${styles.form__label_date} ${styles.form__label_textArea}`}
            data-no-star>
            Сообщение
            <Field
              className={`${styles.form__input} ${styles.form__input_textArea}`}
              as={Textarea}
              label="Сообщение"
              name="message"
              id="message"
              placeholder="Сообщение"
            />
            <ErrorMessage
              name="message"
              component="div"
              className={`${styles.form__error} ${styles.form__error_textarea}`}
            />
          </Label>

          <Label htmlFor="sum" className={styles.form__label}>
            Сумма (Должна быть больше 1 ₽ и меньше 1000 ₽)
            <Field
              className={styles.form__input}
              as={Input}
              label="Сумма"
              name="sum"
              id="sum"
              placeholder="Сумма"
              required
            />
            <ErrorMessage name="sum" component="div" className={styles.form__error} />
          </Label>

          <fieldset className={styles.form__checkbox}>
            <Checkbox
              htmlFor="checkbox"
              label="Я уведомлен, что подарочные сертификаты не подлежат возврату."
              name="checkbox"
              type="checkbox"
            />
            <ErrorMessage
              name="checkbox"
              component="div"
              className={`${styles.form__error} ${styles.form__error_checkbox}`}
            />
          </fieldset>

          <Button size={ButtonSize.S} theme={ButtonTheme.PRIMARY} type="submit" disabled={isSubmitting}>
            Продолжить
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default FormBuyGiftCertificate
