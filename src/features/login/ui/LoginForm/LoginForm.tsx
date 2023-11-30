import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import { validationSchema } from '../../model/validation/validation'
import { ILoginFormValues } from '../../model/types/types'
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

  const handleSubmit = (values: ILoginFormValues, helpers: FormikHelpers<ILoginFormValues>) => {
    helpers.setSubmitting(true)
    helpers.resetForm()
    helpers.setSubmitting(false)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}>
      {({ isValid, dirty, isSubmitting }) => (
        <Form className={styles.form}>
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
            <Button size={ButtonSize.S} theme={ButtonTheme.OUTLINE} className={styles.button} type="button">
              Регистрация
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
