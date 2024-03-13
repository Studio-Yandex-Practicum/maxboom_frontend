import { ErrorMessage, Field, Form, Formik } from 'formik'

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import { Input } from '@/shared/ui/Input/Input'
import Label from '@/shared/ui/Label/Label'
import { Textarea } from '@/shared/ui/Textarea/Textarea'

import { FormQuestionData } from '../model/types/types'
import { validationSchema } from '../model/validation/validation'

import styles from './FormQuestion.module.scss'

/**
 * Форма отправки текста сообщения
 */

export default function FormQuestion() {
  const initialValues: FormQuestionData = {
    name: '',
    email: '',
    textarea: ''
  }

  const handleSubmit = () => {
    console.log('Ok')
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Heading>Задать вопрос</Heading>
          <Label htmlFor="name" className={styles.form__label}>
            Ваше имя
            <Field
              className={styles.form__input}
              as={Input}
              label="Ваше имя"
              name="name"
              type="name"
              placeholder="Ваше имя"
            />
            <ErrorMessage name="name" component="div" className={styles.form__error} />
          </Label>
          <Label htmlFor="email" className={styles.form__label}>
            Ваш E-Mail
            <Field
              className={styles.form__input}
              as={Input}
              label="Ваш E-Mail"
              name="email"
              placeholder="Ваш E-Mail"
            />
            <ErrorMessage name="email" component="div" className={styles.form__error} />
          </Label>
          <Label htmlFor="textarea" className={styles.form__label}>
            Ваш вопрос или сообщение
            <Field
              className={styles.form__input}
              as={Textarea}
              name="textarea"
              placeholder="Ваш вопрос или сообщение"
            />
            <ErrorMessage name="textarea" component="div" className={styles.form__errorText} />
          </Label>
          <Button size={ButtonSize.S} theme={ButtonTheme.PRIMARY} type="submit" disabled={isSubmitting}>
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  )
}
