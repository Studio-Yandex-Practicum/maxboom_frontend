/* eslint-disable */
// TODO: https://github.com/Studio-Yandex-Practicum/maxboom_frontend/issues/263
import { Field, ErrorMessage, Formik, Form } from 'formik'
import classNames from 'classnames'
import { validationSchema } from '@/features/login/model/validation/validation'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Button, ButtonTheme, ButtonDesign, ButtonSize } from '@/shared/ui/Button/Button'
import Label from '@/shared/ui/Label/Label'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import { TFormReturn } from '@/shared/model/types/common'
import styles from './FormReturn.module.scss'

const initialValues: TFormReturn = {
  name: '',
  surname: '',
  email: '',
  tel: '',
  numberOrder: '',
  dateOrder: '',
  itemInfo: '',
  model: '',
  amount: '',
  textArea: '',
  myChoice: ''
}

/**
 * Форма возврата
 * @param {string} name - имя
 * @param {string} surname - фамилия
 * @param {string} email - почта
 * @param {string} tel - телефон
 * @param {string} numberOrder - номер заказа
 * @param {string} dateOrder - дата заказа
 * @param {string} itemInfo - наименование товара
 * @param {string} model - модель товара
 * @param {string} amount - количество товара
 * @param {string} textArea - описание дефектов
 * @param {string} myChoice - распакован ли товар?
 */

const FormReturn = () => {
  return (
    <>
      <Formik
        validateOnBlur={true}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false)
        }}
        initialValues={initialValues}>
        <Form className={styles.formReturn}>
          <Heading type={HeadingType.SMALL}>Пожалуйста, заполните форму запроса на возврат товара.</Heading>
          <Heading type={HeadingType.SMALL} className={styles.formReturn__title}>
            Информация о заказе
          </Heading>
          <Label htmlFor="name" className={styles.formReturn__label}>
            Имя
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="Имя"
              name="name"
              placeholder="Имя"
            />
            <ErrorMessage name="name" component="div" className={styles.formReturn__error} />
          </Label>
          <Label htmlFor="surname" className={styles.formReturn__label}>
            Фамилия
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="Фамилия"
              name="surname"
              placeholder="Фамилия"
            />
            <ErrorMessage name="surname" component="div" className={styles.formReturn__error} />
          </Label>
          <Label htmlFor="email" className={styles.formReturn__label}>
            E-Mail
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="E-Mail"
              name="email"
              placeholder="E-Mail"
            />
            <ErrorMessage name="email" component="div" className={styles.formReturn__error} />
          </Label>
          <Label htmlFor="tel" className={styles.formReturn__label}>
            Телефон
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="Телефон"
              name="tel"
              placeholder="Телефон"
            />
            <ErrorMessage name="tel" component="div" className={styles.formReturn__error} />
          </Label>
          <Label htmlFor="numberOrder" className={styles.formReturn__label}>
            № Заказа
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="№ Заказа"
              name="numberOrder"
              placeholder="№ Заказа"
            />
            <ErrorMessage name="numberOrder" component="div" className={styles.formReturn__error} />
          </Label>
          <Label
            htmlFor="dateOrder"
            className={classNames(styles.formReturn__label, styles.formReturn__label_date)}
            data-no-star>
            Дата заказа
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="Дата заказа"
              name="dateOrder"
              placeholder="Дата заказа"
              type="date"
            />
          </Label>
          <Heading type={HeadingType.SMALL} className={styles.formReturn__title}>
            Информация о товаре
          </Heading>
          <Label htmlFor="itemInfo" className={styles.formReturn__label}>
            Наименование товара
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="Наименование товара"
              name="itemInfo"
              placeholder="Наименование товара"
            />
            <ErrorMessage name="itemInfo" component="div" className={styles.formReturn__error} />
          </Label>
          <Label htmlFor="model" className={styles.formReturn__label}>
            Модель
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="Модель"
              name="model"
              placeholder="Модель"
            />
            <ErrorMessage name="model" component="div" className={styles.formReturn__error} />
          </Label>
          <Label htmlFor="model" className={styles.formReturn__label}>
            Количество
            <Field
              className={styles.formReturn__input}
              as={Input}
              label="Количество"
              name="amount"
              placeholder="Количество"
            />
            <ErrorMessage name="amount" component="div" className={styles.formReturn__error} />
          </Label>
          <div className={styles.formReturn__container}>
            <fieldset className={styles.formReturn__label}>
              Причина возврата
              <Checkbox
                htmlFor="check"
                label="Другое (другая причина), пожалуйста укажите/приложите подробности"
                name="check"
                value="Другое (другая причина), пожалуйста укажите/приложите подробности"
              />
              <Checkbox
                htmlFor="check"
                label="Ошибка, пожалуйста укажите/приложите подробности"
                name="check"
                value="Ошибка, пожалуйста укажите/приложите подробности"
              />
              <Checkbox htmlFor="check" label="Ошибочный заказ" name="check" value="Ошибочный заказ" />
              <Checkbox
                htmlFor="check"
                label="Получен не тот (ошибочный) товар"
                name="check"
                value="Получен не тот (ошибочный) товар"
              />
              <Checkbox
                htmlFor="check"
                label="Получен/доставлен неисправным (сломан)"
                name="check"
                value="Получен/доставлен неисправным (сломан)"
              />
            </fieldset>
          </div>
          <div className={styles.formReturn__container}>
            <fieldset className={styles.formReturn__label}>
              Товар распакован
              <Checkbox htmlFor="true" label="Да" name="myChoice" value="true" />
              <Checkbox htmlFor="false" label="Нет" name="myChoice" value="false" />
            </fieldset>
          </div>
          <Label
            htmlFor="dateOrder"
            className={classNames(styles.formReturn__label, styles.formReturn__label_date)}
            data-no-star>
            Описание дефектов
            <Textarea className={styles.formReturn__textArea} name="textArea" />
          </Label>
          <div className={styles.formReturn__buttonContainer}>
            <Button
              theme={ButtonTheme.PREVIOUS}
              design={ButtonDesign.SQUARE}
              size={ButtonSize.S}
              className={styles.formReturn__button}
              type="button">
              Назад
            </Button>
            <Button
              theme={ButtonTheme.PRIMARY}
              design={ButtonDesign.SQUARE}
              size={ButtonSize.S}
              type="submit">
              Продолжить
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default FormReturn
