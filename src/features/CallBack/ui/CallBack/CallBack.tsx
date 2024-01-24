import React, { useCallback } from 'react'
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import IconClose from '@/assets/icons/IconClose.svg'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph, { ParagraphTheme } from '@/shared/ui/Paragraph/Paragraph'
import { validationSchema } from '../../models/validation/validation'
import { CallBackData } from '../../models/types/types'
import styles from './CallBack.module.scss'

interface CallBackProps {
  setIsModalClosing: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Форма обратного звонка
 * Используется как children в компоненте модального окна.
 * После заполнения формы отправляет данные в CRM.
 * Для создания формы используется Formik, для валидации - Yup.
 */
export const CallBack: React.FC<CallBackProps> = ({ setIsModalClosing }) => {
  const initialValues: CallBackData = {
    name: '',
    phoneNumber: '',
    comment: ''
  }

  const handleClose = useCallback(() => {
    setIsModalClosing(true)
  }, [])

  const handleSubmit = async (values: CallBackData, helpers: FormikHelpers<CallBackData>) => {
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
          <div className={styles['cross-button']}>
            <Button onClick={handleClose}>
              <IconClose viewBox="0 0 34 34" />
            </Button>
          </div>
          <Heading className={styles.heading}>Заказать обратный звонок</Heading>
          <label htmlFor="name" className={styles.label}>
            <span className={styles.span}>*</span> Ваше имя:
            <Field className={styles.input} as={Input} label="Ваше имя" name="name" />
            <ErrorMessage name="name">
              {msg => (
                <Paragraph className={styles.error} theme={ParagraphTheme.ERROR}>
                  {msg}
                </Paragraph>
              )}
            </ErrorMessage>
          </label>

          <label htmlFor="phoneNumber" className={styles.label}>
            <span className={styles.span}>*</span> Ваш телефон:
            <Field
              className={styles.input}
              as={Input}
              label="Телефон"
              name="phoneNumber"
              type="tel"
              inputMode="tel"
              mask="+7 (999) 999-99-99"
            />
            <ErrorMessage name="phoneNumber">
              {msg => (
                <Paragraph className={styles.error} theme={ParagraphTheme.ERROR}>
                  {msg}
                </Paragraph>
              )}
            </ErrorMessage>
          </label>

          <label htmlFor="comment" className={styles.label}>
            Комментарий:
            <Field className={styles.textarea} as={Textarea} label="Комментарий" name="comment" rows={5} />
          </label>

          <Button
            size={ButtonSize.S}
            theme={ButtonTheme.PRIMARY}
            className={styles.button}
            type="submit"
            disabled={!isValid || !dirty || isSubmitting}>
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  )
}
