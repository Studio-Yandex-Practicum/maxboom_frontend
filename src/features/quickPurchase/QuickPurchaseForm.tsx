import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import Heading from '@/shared/ui/Heading/Heading'
import { validationSchema } from './validation'
import { IFormValues } from './types'
import styles from './QuickPurchaseForm.module.scss'

export const QuickPurchaseForm: React.FC = () => {
  const initialValues: IFormValues = {
    name: '',
    phoneNumber: '',
    comment: ''
  }

  const [formChanged, setFormChanged] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: IFormValues, { resetForm }: any) => {
    // Здесь отправляем данные из формы
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
          <Heading>Быстрый заказ</Heading>
          <label htmlFor="name">
            <span className={styles.span}>*</span> Имя
          </label>
          <Field className={styles.input} as={Input} label="Имя" name="name" placeholder="Имя" />
          <ErrorMessage name="name" component="div" className={styles.error} />
          <label htmlFor="phoneNumber">
            <span className={styles.span}>*</span> Телефон
          </label>
          <Field
            className={styles.input}
            as={Input}
            label="Телефон"
            name="phoneNumber"
            type="tel"
            inputMode="tel"
            placeholder="Телефон"
            mask="+7 (999) 999-99-99"
          />
          <ErrorMessage name="phoneNumber" component="div" className={styles.error} />
          <label htmlFor="comment">Комментарий</label>
          <Field
            className={styles.textarea}
            as={Textarea}
            label="Напишите комментарий к заказу"
            name="comment"
            placeholder="Текст комментария"
          />
          <Button
            size={ButtonSize.S}
            theme={ButtonTheme.PRIMARY}
            className="button"
            type="submit"
            disabled={!isValid || !formChanged}>
            Отправить заказ
          </Button>
        </Form>
      )}
    </Formik>
  )
}
