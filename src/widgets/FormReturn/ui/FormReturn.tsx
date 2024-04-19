import classNames from 'classnames'
import { Field, ErrorMessage, Formik, Form } from 'formik'

import { Button, ButtonTheme, ButtonDesign, ButtonSize } from '@/shared/ui/Button/Button'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import { Input } from '@/shared/ui/Input/Input'
import Label from '@/shared/ui/Label/Label'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import { Textarea } from '@/shared/ui/Textarea/Textarea'

import { IFormReturn } from '../model/types/types'
import { validationSchema } from '../model/validation/validation'

import styles from './FormReturn.module.scss'

/**
 * Форма возврата
 */

const initialValues: IFormReturn = {
  name: '',
  surname: '',
  email: '',
  tel: '',
  orderNumber: '',
  orderDate: '',
  itemName: '',
  model: '',
  quantity: 1,
  reasons: '',
  unpacked: String('Нет'),
  textArea: ''
}

const refundReasons = [
  {
    label: 'Другое (другая причина), пожалуйста укажите/приложите подробности',
    value: 'Другое (другая причина), пожалуйста укажите/приложите подробности'
  },
  {
    label: 'Ошибка, пожалуйста укажите/приложите подробности',
    value: 'Ошибка, пожалуйста укажите/приложите подробности'
  },
  { label: 'Ошибочный заказ', value: 'Ошибочный заказ' },
  { label: 'Получен не тот (ошибочный) товар', value: 'Получен не тот (ошибочный) товар' },
  { label: 'Получен/доставлен неисправным (сломан)', value: 'Получен/доставлен неисправным (сломан)' }
]

const unpacked = [
  { label: 'Да', value: 'Да' },
  { label: 'Нет', value: 'Нет' }
]

const FormReturn = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(JSON.stringify(values, null, 2))
        setSubmitting(false)
        resetForm()
      }}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Paragraph className={styles.form__paragraph}>
            Пожалуйста, заполните форму запроса на возврат товара.
          </Paragraph>
          <Heading type={HeadingType.NORMAL} className={styles.form__title}>
            Информация о заказе
          </Heading>

          <Label htmlFor="name" className={styles.form__label}>
            Имя
            <Field
              className={styles.form__input}
              as={Input}
              label="Имя"
              name="name"
              id="name"
              placeholder="Имя"
              required
            />
            <ErrorMessage name="name" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="surname" className={styles.form__label}>
            Фамилия
            <Field
              className={styles.form__input}
              as={Input}
              label="Фамилия"
              name="surname"
              id="surname"
              placeholder="Фамилия"
              required
            />
            <ErrorMessage name="surname" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="email" className={styles.form__label}>
            E-Mail
            <Field
              className={styles.form__input}
              as={Input}
              label="E-Mail"
              name="email"
              id="email"
              placeholder="E-Mail"
              required
            />
            <ErrorMessage name="email" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="tel" className={styles.form__label}>
            Телефон
            <Field
              className={styles.form__input}
              as={Input}
              label="Телефон"
              name="tel"
              id="tel"
              placeholder="Телефон"
              required
            />
            <ErrorMessage name="tel" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="orderNumber" className={styles.form__label}>
            № Заказа
            <Field
              className={styles.form__input}
              as={Input}
              label="№ Заказа"
              name="orderNumber"
              id="orderNumber"
              placeholder="№ Заказа"
              required
            />
            <ErrorMessage name="orderNumber" component="div" className={styles.form__error} />
          </Label>

          <Label
            htmlFor="orderDate"
            className={classNames(styles.form__label, styles.form__label_date)}
            data-no-star>
            Дата заказа
            <Field
              className={styles.form__input}
              as={Input}
              label="Дата заказа"
              name="orderDate"
              id="orderNumber"
              placeholder="Дата заказа"
              type="date"
              required
            />
            <ErrorMessage name="orderDate" component="div" className={styles.form__error} />
          </Label>

          <Heading type={HeadingType.NORMAL} className={`${styles.form__title} ${styles.form__title_second}`}>
            Информация о товаре
          </Heading>

          <Label htmlFor="itemName" className={styles.form__label}>
            Наименование товара
            <Field
              className={styles.form__input}
              as={Input}
              label="Наименование товара"
              name="itemName"
              id="orderNumber"
              placeholder="Наименование товара"
              required
            />
            <ErrorMessage name="itemName" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="model" className={styles.form__label}>
            Модель
            <Field
              className={styles.form__input}
              as={Input}
              label="Модель"
              name="model"
              id="model"
              placeholder="Модель"
              required
            />
            <ErrorMessage name="model" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="quantity" className={styles.form__label}>
            Количество
            <Field
              className={styles.form__input}
              as={Input}
              label="Количество"
              name="quantity"
              id="quantity"
              placeholder="Количество"
              required
            />
            <ErrorMessage name="quantity" component="div" className={styles.form__error} />
          </Label>

          <Label htmlFor="reasons" className={`${styles.form__label} ${styles.form__label_reasons}`}>
            Тема подарочного сертификата
            <ul>
              {refundReasons.map(option => {
                return (
                  <li key={option.value}>
                    <Checkbox
                      className={styles.form__radio}
                      htmlFor="reasons"
                      label={option.label}
                      name="reasons"
                      value={option.value}
                    />
                  </li>
                )
              })}
            </ul>
            <ErrorMessage
              name="reasons"
              component="div"
              className={`${styles.form__error} ${styles.form__error_reasons}`}
            />
          </Label>

          <Label htmlFor="unpacked" className={`${styles.form__label} ${styles.form__label_unpacked}`}>
            Товар распакован
            <ul>
              {unpacked.map(option => {
                return (
                  <li key={option.value}>
                    <Checkbox
                      className={styles.form__radio}
                      htmlFor="unpacked"
                      label={option.label}
                      name="unpacked"
                      value={option.value}
                    />
                  </li>
                )
              })}
            </ul>
          </Label>

          <Label
            htmlFor="textArea"
            className={`${styles.form__label} ${styles.form__label_date} ${styles.form__label_textArea}`}
            data-no-star>
            Описание дефектов
            <Field
              className={`${styles.form__input} ${styles.form__input_textArea}`}
              as={Textarea}
              label="Сообщение"
              name="textArea"
              id="textArea"
              placeholder="Описание дефектов"
            />
            <ErrorMessage
              name="textArea"
              component="div"
              className={`${styles.form__error} ${styles.form__error_textarea}`}
            />
          </Label>

          <div className={styles.form__buttons}>
            <Button
              theme={ButtonTheme.PREVIOUS}
              design={ButtonDesign.SQUARE}
              size={ButtonSize.S}
              type="button"
              onClick={() => console.log('НАЗАД')}>
              Назад
            </Button>

            <Button
              theme={ButtonTheme.PRIMARY}
              design={ButtonDesign.SQUARE}
              size={ButtonSize.S}
              type="submit"
              disabled={isSubmitting}>
              Продолжить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormReturn
