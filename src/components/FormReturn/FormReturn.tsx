import styles from './FormReturn.module.scss'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import { Field, ErrorMessage, Formik, Form } from 'formik'
import { Input } from '@/shared/ui/Input/Input'
import { validationSchema } from '../../features/login/model/validation/validation'
import classNames from 'classnames'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Button, ButtonTheme, ButtonDesign, ButtonSize } from '../../shared/ui/Button/Button'
import Label from '../../shared/ui/Label/Label'
import { TypeValues } from './FormReturnType'

function FormReturn() {
  const initialValues: TypeValues = {
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

  return (
    <>
      <Formik
        validateOnBlur={true}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={() => {
          console.log('succes')
        }}
        initialValues={initialValues}>
        <Form className={styles.formReturn}>
          <p>Пожалуйста, заполните форму запроса на возврат товара.</p>
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
              <label className={styles.formReturn__checkbox}>
                <Field
                  className={styles.formReturn__radio}
                  as={Input}
                  label="Количество"
                  name="check"
                  placeholder="Количество"
                  type="radio"
                  value="Другое (другая причина), пожалуйста укажите/приложите подробности"
                />
                <div className={styles.formReturn__radioCustom}></div>
                Другое (другая причина), пожалуйста укажите/приложите подробности
              </label>
              <label className={styles.formReturn__checkbox}>
                <Field
                  className={styles.formReturn__radio}
                  as={Input}
                  label="Количество"
                  name="check"
                  placeholder="Количество"
                  type="radio"
                  value="Ошибка, пожалуйста укажите/приложите подробности"
                />
                <div className={styles.formReturn__radioCustom}></div>
                Ошибка, пожалуйста укажите/приложите подробности
              </label>
              <label className={styles.formReturn__checkbox}>
                <Field
                  className={styles.formReturn__radio}
                  as={Input}
                  label="Количество"
                  name="check"
                  placeholder="Количество"
                  type="radio"
                  value="Ошибочный заказ"
                />
                <div className={styles.formReturn__radioCustom}></div>
                Ошибочный заказ
              </label>
              <label className={styles.formReturn__checkbox}>
                <Field
                  className={styles.formReturn__radio}
                  as={Input}
                  label="Количество"
                  name="check"
                  placeholder="Количество"
                  type="radio"
                  value="Получен не тот (ошибочный) товар"
                />
                <div className={styles.formReturn__radioCustom}></div>
                Получен не тот (ошибочный) товар
              </label>
              <label className={styles.formReturn__checkbox}>
                <Field
                  className={styles.formReturn__radio}
                  as={Input}
                  label="Количество"
                  name="check"
                  placeholder="Количество"
                  type="radio"
                  value="Получен/доставлен неисправным (сломан)"
                />
                <div className={styles.formReturn__radioCustom}></div>
                Получен/доставлен неисправным (сломан)
              </label>
            </fieldset>
          </div>
          <div className={styles.formReturn__container}>
            <fieldset className={styles.formReturn__label}>
              Товар распакован
              <label className={styles.formReturn__checkbox}>
                <Field
                  className={styles.formReturn__radio}
                  as={Input}
                  label="Да"
                  name="myChoice"
                  placeholder="Да"
                  type="radio"
                  value="Да"
                />
                <div className={styles.formReturn__radioCustom}></div>
                Да
              </label>
              <label className={styles.formReturn__checkbox}>
                <Field
                  className={styles.formReturn__radio}
                  as={Input}
                  label="Нет"
                  name="myChoice"
                  placeholder="Нет"
                  type="radio"
                  value="Нет"
                />
                <div className={styles.formReturn__radioCustom}></div>
                Нет
              </label>
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
              className={styles.formReturn__button}>
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
