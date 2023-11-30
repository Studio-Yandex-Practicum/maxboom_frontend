import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import Heading from '@/shared/ui/Heading/Heading'
import { validationSchema } from '../../model/validation/validation'
import { IFormValues } from '../../model/types/types'
import styles from './QuickPurchaseForm.module.scss'
import Paragraph, { ParagraphTheme } from '@/shared/ui/Paragraph/Paragraph'

/**
 * Форма быстрого оформления заказа.
 * Используется как children в компоненте модального окна.
 * После заполнения формы отправляет данные в CRM.
 * Для создания формы используется Formik, для валидации - Yup.
 */
export const QuickPurchaseForm: React.FC = () => {
  const initialValues: IFormValues = {
    name: '',
    phoneNumber: '',
    comment: ''
  }

  const [formChanged, setFormChanged] = useState(false)

  const handleSubmit = (values: IFormValues, helpers: FormikHelpers<IFormValues>) => {
    // Здесь отправляем данные из формы
    helpers.resetForm()
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
          <ErrorMessage name="name">{msg => <Paragraph theme={ParagraphTheme.ERROR}>{msg}</Paragraph>}</ErrorMessage>

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
          <ErrorMessage name="phoneNumber">
            {msg => <Paragraph theme={ParagraphTheme.ERROR}>{msg}</Paragraph>}
          </ErrorMessage>

          <label htmlFor="comment">Комментарий</label>
          <Field
            className={styles.textarea}
            as={Textarea}
            label="Напишите комментарий к заказу"
            name="comment"
            placeholder="Текст комментария"
            rows={4}
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
