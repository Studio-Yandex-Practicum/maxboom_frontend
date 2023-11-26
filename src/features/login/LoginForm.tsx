import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import { validationSchema } from './validation'
import { ILoginFormValues } from './types'
import Link from '@/ui/link'
import styles from './LoginForm.module.scss'

/*
 * Форма авторизации пользователя
 */
export default function LoginForm() {
  const initialValues: ILoginFormValues = {
    email: '',
    password: ''
  }

  const [formChanged, setFormChanged] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: ILoginFormValues, { resetForm }: any) => {
    // Здесь отправляем данные из формы для авторизации пользователя
    resetForm()
    setFormChanged(false)
  }

  const handleFormChange = () => {
    if (!formChanged) {
      setFormChanged(true)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}>
      {({ isValid }) => (
        <Form className={styles.form} onChange={handleFormChange}>
          <Heading>Авторизация</Heading>
          <label htmlFor="email">Электронная почта</label>
          <Field
            className={styles.input}
            as={Input}
            label="Электронная почта"
            name="email"
            placeholder="Электронная почта"
          />
          <ErrorMessage name="email" component="div" className={styles.error} />
          <label htmlFor="password">Пароль</label>
          <Field
            className={styles.input}
            as={Input}
            label="Пароль"
            name="password"
            type="password"
            placeholder="Пароль"
          />
          <ErrorMessage name="password" component="div" className={styles.error} />
          <Link to="#">Забыли пароль?</Link>
          <div className={styles.buttons}>
            <Button
              size={ButtonSize.S}
              theme={ButtonTheme.PRIMARY}
              className={styles.button}
              type="submit"
              disabled={!isValid || !formChanged}>
              Войти
            </Button>
            <Button size={ButtonSize.S} theme={ButtonTheme.OUTLINE} className={styles.button} type="button">
              Регистрация
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
