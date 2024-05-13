import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import IconClose from '@/assets/icons/iconHeaderMenuClose.svg'
import { getErrorAuthStatus } from '@/features/login/model/selectors/getUserAuthStatus'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import { Input } from '@/shared/ui/Input/Input'
import Link from '@/shared/ui/Link/Link'
import Paragraph, { ParagraphTheme } from '@/shared/ui/Paragraph/Paragraph'

import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { LoginAuthData } from '../../model/types/types'
import { validationSchema } from '../../model/validation/validation'

import styles from './LoginForm.module.scss'

export interface LoginFormProps {
  onLogin?: VoidFunction
  isModalOpen?: boolean
  handleClose?: () => void
}

/**
 * Форма авторизации пользователя
 * @param {boolean} isModalOpen - состояние открытия модального окна;
 * @param {function} handleClose - функция закрытия модального окна;
 * @param {function} onLogin - функция перенаправления по роуту;
 */

const LoginForm: FC<LoginFormProps> = ({ isModalOpen, handleClose, onLogin }) => {
  const initialValues: LoginAuthData = {
    email: '',
    password: ''
  }
  const dispatch = useAppDispatch()
  const error = useSelector(getErrorAuthStatus)
  const handleSubmit = async (values: LoginAuthData, helpers: FormikHelpers<LoginAuthData>) => {
    const result = await dispatch(loginByUsername(values))
    if (result.meta.requestStatus === 'fulfilled') {
      onLogin?.()
      helpers.resetForm()
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}>
      {({ isValid, dirty, isSubmitting }) => (
        <Form className={styles.form}>
          {isModalOpen && (
            <Button className={styles.closeButton} onClick={handleClose}>
              <IconClose className={styles.closeIcon} />
            </Button>
          )}
          <Heading>Авторизация</Heading>
          <label htmlFor="email" className={styles.label}>
            Электронная почта
            <Field
              className={styles.input}
              as={Input}
              label="Электронная почта"
              name="email"
              placeholder="Электронная почта"
            />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </label>
          <label htmlFor="password" className={styles.label}>
            Пароль
            <Field
              className={styles.input}
              as={Input}
              label="Пароль"
              name="password"
              type="password"
              placeholder="Пароль"
            />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </label>
          <Link to="#">Забыли пароль?</Link>
          <div className={styles.buttons}>
            <Button
              size={ButtonSize.S}
              theme={ButtonTheme.PRIMARY}
              className={styles.button}
              type="submit"
              disabled={!isValid || !dirty || isSubmitting}>
              Войти
            </Button>
            <Button size={ButtonSize.S} theme={ButtonTheme.OUTLINED} className={styles.button} type="button">
              Регистрация
            </Button>
          </div>
          {error && (
            <Paragraph theme={ParagraphTheme.ERROR} className={styles.errorForm}>
              {error}
            </Paragraph>
          )}
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
