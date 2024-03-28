import { AxiosError } from 'axios'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FC, useState } from 'react'

import { $api } from '@/shared/api/api'
import { ApiRoutes } from '@/shared/api/types'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Span from '@/shared/ui/Span/Span'

import styles from './FeedbackForm.module.scss'
import { SECCEED_SUBMIT_MESSAGE } from './model/constants/constants'
import { getErrorText, hasErrors } from './model/functions/functions'
import { feedbackFormScheme } from './model/scheme/feedbackFormScheme'
import { IFeedbackFormValues } from './model/types/types'
import { FeedbackFormMsg } from './ui/FeedbackFormMsg/FeedbackFormMsg'
import { FeedbackFormRadioGroup } from './ui/FeedbackFormRadioGroup/FeedbackFormRadioGroup'

/**
 * Widget формы добавления отзыва о магазине
 */
export const FeedbackForm: FC = () => {
  const [showMsg, setShowMsg] = useState(false)
  const [showApiErrorMsg, setShowApiErrorMsg] = useState(false)
  const [apiErrorMsg, setApiErrorMsg] = useState('')

  const onSubmit = async (
    values: IFeedbackFormValues,
    { setSubmitting, resetForm }: FormikHelpers<IFeedbackFormValues>
  ) => {
    try {
      await $api.post(`api/${ApiRoutes.STORE_REVIEWS}/`, values)

      resetForm()
      setShowMsg(true)
    } catch (err) {
      const error = err as AxiosError
      setApiErrorMsg(error.message)
      setShowApiErrorMsg(true)
      console.error(error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section className={styles.feedbackform}>
      <Heading className={styles.feedbackform__header}>Оставить отзыв</Heading>
      <Formik
        initialValues={{
          author_email: '',
          author_name: '',
          text: '',
          delivery_speed_score: '',
          price_score: '',
          quality_score: ''
        }}
        validationSchema={feedbackFormScheme}
        onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className={styles.feedbackform__form}>
              <label htmlFor="author_name" className={styles.feedbackform__label}>
                <Paragraph className={styles.feedbackform__fieldlabel}>
                  <Span>*</Span>
                  {' Имя'}
                </Paragraph>
                <Field name="author_name" type="text" className={styles.feedbackform__field} />
              </label>

              <label htmlFor="author_email" className={styles.feedbackform__label}>
                <Paragraph className={styles.feedbackform__fieldlabel}>Эл. почта</Paragraph>
                <Field name="author_email" type="email" className={styles.feedbackform__field} />
              </label>

              <label htmlFor="text" className={styles.feedbackform__label}>
                <Paragraph className={styles.feedbackform__fieldlabel}>
                  <Span>*</Span>
                  {' Отзыв'}
                </Paragraph>
                <Field
                  name="text"
                  type="textarea"
                  as="textarea"
                  className={`${styles.feedbackform__field} ${styles.feedbackform__field_area}`}
                />
              </label>

              <FeedbackFormRadioGroup groupName="delivery_speed_score" title="Скорость доставки" />

              <FeedbackFormRadioGroup groupName="price_score" title="Цена" />

              <FeedbackFormRadioGroup groupName="quality_score" title="Качество товара" />

              {hasErrors(errors, touched) && (
                <FeedbackFormMsg text={getErrorText(errors)} isError={true} disableClose={true} />
              )}

              {!isSubmitting && showApiErrorMsg && (
                <FeedbackFormMsg
                  text={apiErrorMsg}
                  isError={true}
                  setShowMsg={setShowApiErrorMsg}
                  disableClose={false}
                />
              )}

              {!isSubmitting && showMsg && (
                <FeedbackFormMsg text={SECCEED_SUBMIT_MESSAGE} isError={false} setShowMsg={setShowMsg} />
              )}

              <Button
                size={ButtonSize.S}
                theme={ButtonTheme.PRIMARY}
                type="submit"
                disabled={isSubmitting}
                className={styles.feedbackform__submitbtn}>
                Оставить отзыв
              </Button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}
