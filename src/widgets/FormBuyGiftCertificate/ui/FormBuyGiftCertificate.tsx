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
  textArea: ''
}

const FormBuyGiftCertificate = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false)
      }}
      validationSchema={validationSchema}
      validateOnBlur={true}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Paragraph>
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
              placeholder="Ваш Email"
              required
            />
            <ErrorMessage name="email" component="div" className={styles.form__error} />
          </Label>
          <fieldset className={styles.form__label}>
            Тема подарочного сертификата
            <Checkbox htmlFor="check" label="День рождения" name="check" value="День рождения" />
            <Checkbox htmlFor="check" label="Другое" name="check" value="Другое" />
            <Checkbox htmlFor="check" label="Новый год" name="check" value="Новый год" />
          </fieldset>
          <Label
            htmlFor="textarea"
            className={`${styles.form__label} ${styles.form__label_date}`}
            data-no-star>
            Сообщение
            <Field
              className={`${styles.form__input} ${styles.form__input_textArea}`}
              as={Textarea}
              label="Сообщение"
              name="textarea"
              placeholder="Сообщение"
            />
            <ErrorMessage
              name="textarea"
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
              value="Я уведомлен, что подарочные сертификаты не подлежат возврату."
              type="checkbox"
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
