import classNames from 'classnames'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import { FC } from 'react'
import { useNavigate } from 'react-router'

import { RequiredFieldTitle } from '@/features/RequiredFieldTitle/RequiredFieldTitle'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { Button, ButtonDesign, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import { Input } from '@/shared/ui/Input/Input'
import Label from '@/shared/ui/Label/Label'

import { createAccount } from '../model/services/createAccount/createAccount'
import { ICreateAccountForm } from '../model/types/types'
import { validationSchema } from '../model/validation/validation'

import styles from './CreateAccountForm.module.scss'

const initialValues: ICreateAccountForm = {
  name: '',
  surname: '',
  email: '',
  tel: '',
  country: '',
  region: '',
  index: '',
  model: '',
  city: '',
  password: '',
  passwordConfirmation: '',
  subscription: String('Нет'),
  agreement: false
}

/*TODO Добавить по готовности бэкенда
 const subscription = [
  { label: 'Да', value: 'Да' },
  { label: 'Нет', value: 'Нет' }
] */

const countries = ['---Выберите---', 'Белоруссия (Беларусь)', 'Российская Федерация']
/**
 * Страница регистрации
 */

const CreateAccountForm: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleRedirect = () => {
    //TODO
  }
  const openModal = () => {
    //TODO
  }

  const handleSubmit = async (values: ICreateAccountForm, helpers: FormikHelpers<ICreateAccountForm>) => {
    const result = await dispatch(createAccount(values))
    if (result.meta.requestStatus === 'fulfilled') {
      helpers.resetForm()
      navigate(Routes.CREATE_ACCOUNT_SUCCESS)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Heading type={HeadingType.NORMAL} className={styles.form__title}>
            Основные данные
          </Heading>
          <Label htmlFor="email" className={styles.form__label}>
            <RequiredFieldTitle text="E-Mail"></RequiredFieldTitle>
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
          <Label htmlFor="name" className={styles.form__label}>
            Имя
            <Field
              className={styles.form__input}
              as={Input}
              label="Имя"
              name="name"
              id="name"
              placeholder="Имя"
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
            />
            <ErrorMessage name="surname" component="div" className={styles.form__error} />
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
            />
            <ErrorMessage name="tel" component="div" className={styles.form__error} />
          </Label>
          <Label
            htmlFor="country"
            className={classNames(styles.form__label, styles.form__label_notRequired)}
            data-no-star>
            Страна
            <Field
              className={classNames(styles.form__input, styles.form__input_extra)}
              as="select"
              label="Страна"
              name="country"
              id="country"
              placeholder="Страна">
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </Field>
          </Label>

          <Label
            htmlFor="region"
            className={classNames(styles.form__label, styles.form__label_notRequired)}
            data-no-star>
            Регион / Область
            <Field
              className={styles.form__input}
              as={Input}
              label="Регион / Область"
              name="region"
              id="region"
              placeholder="Регион / Область"
            />
            <ErrorMessage name="region" component="div" className={styles.form__error} />
          </Label>
          <Label
            htmlFor="index"
            className={classNames(styles.form__label, styles.form__label_notRequired)}
            data-no-star>
            Индекс
            <Field
              className={styles.form__input}
              as={Input}
              label="Индекс"
              name="index"
              id="index"
              placeholder="Индекс"
            />
            <ErrorMessage name="index" component="div" className={styles.form__error} />
          </Label>
          <Label
            htmlFor="city"
            className={classNames(styles.form__label, styles.form__label_notRequired)}
            data-no-star>
            Город
            <Field
              className={styles.form__input}
              as={Input}
              label="Город"
              name="city"
              id="city"
              placeholder="Город"
            />
            <ErrorMessage name="city" component="div" className={styles.form__error} />
          </Label>
          <Heading type={HeadingType.NORMAL} className={styles.form__title}>
            Ваш пароль
          </Heading>
          <Label htmlFor="password" className={styles.form__label}>
            <RequiredFieldTitle text="Пароль"></RequiredFieldTitle>
            <Field
              className={styles.form__input}
              as={Input}
              label="Пароль"
              name="password"
              id="password"
              placeholder="Пароль"
              required
            />
            <ErrorMessage name="password" component="div" className={styles.form__error} />
          </Label>
          <Label htmlFor="passwordConfirmation" className={styles.form__label}>
            <RequiredFieldTitle text="Подтверждение пароля"></RequiredFieldTitle>
            <Field
              className={styles.form__input}
              as={Input}
              label="Подтвержение пароля"
              name="passwordConfirmation"
              id="passwordConfirmation"
              placeholder="Подтверждение пароля"
              required
            />
            <ErrorMessage name="passwordConfirmation" component="div" className={styles.form__error} />
          </Label>
          {/*TODO Добавить по готовности бэкенда
          <Heading type={HeadingType.NORMAL} className={styles.form__title}>
            Рассылка новостей
          </Heading>
          <Label htmlFor="subscription" className={`${styles.form__label}`}>
            Подписка на новости
            <ul className={styles.form__list}>
              {subscription.map(option => {
                return (
                  <li key={option.value}>
                    <Checkbox
                      className={styles.form__radio}
                      htmlFor="subscription"
                      label={option.label}
                      name="subscription"
                      value={option.value}
                    />
                  </li>
                )
              })}
            </ul>
          </Label> */}

          <div className={styles.form__agreement}>
            <Checkbox
              className={styles.form__checkbox}
              name="agreement"
              htmlFor="agreement"
              type="checkbox"
            />
            <Label
              htmlFor="agreement"
              className={classNames(styles.form__label, styles.form__label_agreement)}
              data-no-star>
              Я прочитал{' '}
              <Button className={styles.form__span} onClick={openModal}>
                {' '}
                Политика безопасности
              </Button>{' '}
              и согласен с условиями безопасности и обработки персональных данных
              <ErrorMessage
                name="agreement"
                component="div"
                className={classNames(styles.form__error, styles.form__error_agreement)}
              />
            </Label>
          </div>

          <Button
            theme={ButtonTheme.PRIMARY}
            design={ButtonDesign.SQUARE}
            size={ButtonSize.S}
            type="submit"
            onClick={handleRedirect}
            disabled={isSubmitting}>
            Продолжить
          </Button>
        </Form>
      )}
    </Formik>
  )
}
export default CreateAccountForm
