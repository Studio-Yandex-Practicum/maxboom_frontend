import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph, { ParagraphTheme } from '@/shared/ui/Paragraph/Paragraph'
import { validationSchema } from '../../model/validation/validation'
import { IFormValues } from '../../model/types/types'
import styles from './QuickPurchaseForm.module.scss'

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

  const handleSubmit = (values: IFormValues, helpers: FormikHelpers<IFormValues>) => {
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
          <Heading>Быстрый заказ</Heading>
          <label htmlFor="name" className={styles.label}>
            <span className={styles.span}>*</span> Имя
            <Field className={styles.input} as={Input} label="Имя" name="name" placeholder="Имя" />
            <ErrorMessage name="name">{msg => <Paragraph theme={ParagraphTheme.ERROR}>{msg}</Paragraph>}</ErrorMessage>
          </label>

          <label htmlFor="phoneNumber" className={styles.label}>
            <span className={styles.span}>*</span> Телефон
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
          </label>

          <label htmlFor="comment" className={styles.label}>
            Комментарий
            <Field
              className={styles.textarea}
              as={Textarea}
              label="Напишите комментарий к заказу"
              name="comment"
              placeholder="Текст комментария"
              rows={4}
            />
          </label>

          <Button
            size={ButtonSize.S}
            theme={ButtonTheme.PRIMARY}
            className="button"
            type="submit"
            disabled={!isValid || !dirty || isSubmitting}>
            Отправить заказ
          </Button>
        </Form>
      )}
    </Formik>
  )
}
