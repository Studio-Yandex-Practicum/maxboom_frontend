import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik'
import React, { useCallback } from 'react'

import IconClose from '@/assets/icons/IconClose.svg'
import { CallBackData } from '@/features/CallBack/models/types/types'
import { validationSchema } from '@/features/CallBack/models/validation/validation'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import { Input } from '@/shared/ui/Input/Input'
import Label from '@/shared/ui/Label/Label'
import Paragraph, { ParagraphTheme } from '@/shared/ui/Paragraph/Paragraph'
import Span from '@/shared/ui/Span/Span'
import { Textarea } from '@/shared/ui/Textarea/Textarea'

import styles from './CallBack.module.scss'

interface CallBackProps {
  setIsModalClosing: React.Dispatch<React.SetStateAction<boolean>>
}

/**
 * Форма обратного звонка
 * Используется как children в компоненте модального окна.
 * После заполнения формы отправляет данные в CRM.
 * Для создания формы используется Formik, для валидации - Yup.
 * setIsModalClosing - функция установки булевого значения, для обозначения состояние процесса закрытия модального окна
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
          <Button className={styles['cross-button']} onClick={handleClose}>
            <IconClose viewBox="0 0 34 34" />
          </Button>
          <Heading className={styles.heading}>Заказать обратный звонок</Heading>
          <Label htmlFor="name">
            <Span>*</Span> Ваше имя:
            <Field id="name" className={styles.input} as={Input} label="Ваше имя" name="name" />
            <ErrorMessage name="name">
              {msg => (
                <Paragraph className={styles.error} theme={ParagraphTheme.ERROR}>
                  {msg}
                </Paragraph>
              )}
            </ErrorMessage>
          </Label>

          <Label htmlFor="phoneNumber">
            <Span>*</Span> Ваш телефон:
            <Field
              id="phoneNumber"
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
          </Label>

          <Label htmlFor="comment">
            Комментарий:
            <Field
              id="comment"
              className={styles.textarea}
              as={Textarea}
              label="Комментарий"
              name="comment"
              rows={5}
            />
          </Label>

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
