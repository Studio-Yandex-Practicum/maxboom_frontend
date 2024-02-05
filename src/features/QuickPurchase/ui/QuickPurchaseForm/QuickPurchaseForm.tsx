import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik'
import React, { useCallback } from 'react'

import IconClose from '@/assets/icons/IconClose.svg'
import { IFormValues } from '@/features/QuickPurchase/model/types/types'
import { validationSchema } from '@/features/QuickPurchase/model/validation/validation'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import { Input } from '@/shared/ui/Input/Input'
import Label from '@/shared/ui/Label/Label'
import Paragraph, { ParagraphTheme } from '@/shared/ui/Paragraph/Paragraph'
import Span from '@/shared/ui/Span/Span'
import { Textarea } from '@/shared/ui/Textarea/Textarea'

import styles from './QuickPurchaseForm.module.scss'

interface QuickPurchaseProps {
  setIsModalClosing: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Форма быстрого оформления заказа.
 * Используется как children в компоненте модального окна.
 * После заполнения формы отправляет данные в CRM.
 * Для создания формы используется Formik, для валидации - Yup.
 */
export const QuickPurchaseForm: React.FC<QuickPurchaseProps> = ({ setIsModalClosing }) => {
  const initialValues: IFormValues = {
    name: '',
    phoneNumber: '',
    comment: ''
  }

  const handleClose = useCallback(() => {
    setIsModalClosing(true)
  }, [])

  const handleSubmit = (values: IFormValues, helpers: FormikHelpers<IFormValues>) => {
    setTimeout(() => {
      helpers.resetForm()
    }, 1000)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      validateOnBlur={true}>
      {({ isValid, dirty, isSubmitting }) => (
        <Form className={styles.form}>
          <Button className={styles['cross-button']} onClick={handleClose}>
            <IconClose viewBox="0 0 34 34" />
          </Button>
          <Heading className={styles.heading}>Быстрый заказ</Heading>
          <Label htmlFor="name">
            <Span>*</Span> Имя
            <Field id="name" className={styles.input} as={Input} label="Имя" name="name" placeholder="Имя" />
            <ErrorMessage name="name">
              {msg => (
                <Paragraph className={styles.error} theme={ParagraphTheme.ERROR}>
                  {msg}
                </Paragraph>
              )}
            </ErrorMessage>
          </Label>

          <Label htmlFor="phoneNumber">
            <Span>*</Span> Телефон
            <Field
              id="phoneNumber"
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
              {msg => (
                <Paragraph className={styles.error} theme={ParagraphTheme.ERROR}>
                  {msg}
                </Paragraph>
              )}
            </ErrorMessage>
          </Label>

          <Label htmlFor="comment">
            Комментарий
            <Field
              id="comment"
              className={styles.textarea}
              as={Textarea}
              label="Напишите комментарий к заказу"
              name="comment"
              placeholder="Текст комментария"
              rows={4}
            />
          </Label>

          <Button
            size={ButtonSize.S}
            theme={ButtonTheme.PRIMARY}
            className={styles.button}
            type="submit"
            disabled={!isValid || !dirty || isSubmitting}>
            Отправить заказ
          </Button>
        </Form>
      )}
    </Formik>
  )
}
