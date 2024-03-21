import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FC, useState } from 'react'

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

export const FeedbackForm: FC = () => {
  const [showMsg, setShowMsg] = useState(false)

  const onSubmit = (
    values: IFeedbackFormValues,
    { setSubmitting, resetForm }: FormikHelpers<IFeedbackFormValues>
  ) => {
    console.log('submit', values)
    setSubmitting(false)
    resetForm()
    setShowMsg(true)
  }

  return (
    <section className={styles.feedbackform}>
      <Heading className={styles.feedbackform__header}>Оставить отзыв</Heading>
      <Formik
        initialValues={{
          email: '',
          username: '',
          text: '',
          deliverySpeedScore: '',
          priceScore: '',
          qualityScore: ''
        }}
        validationSchema={feedbackFormScheme}
        onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className={styles.feedbackform__form}>
              <label htmlFor="username" className={styles.feedbackform__label}>
                <Paragraph>
                  <Span>*</Span>
                  {' Имя'}
                </Paragraph>
                <Field name="username" type="text" className={styles.feedbackform__field} />
              </label>

              <label htmlFor="email" className={styles.feedbackform__label}>
                Эл. почта
                <Field name="email" type="email" className={styles.feedbackform__field} />
              </label>

              <label htmlFor="text" className={styles.feedbackform__label}>
                <Paragraph>
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

              <div id="deliverySpeedScore" className={styles.feedbackform__label}>
                <Paragraph>
                  <Span>*</Span>
                  {' Скорость доставки'}
                </Paragraph>
                <FeedbackFormRadioGroup groupName="deliverySpeedScore" />
              </div>

              <div id="priceScore" className={styles.feedbackform__label}>
                <Paragraph>
                  <Span>*</Span>
                  {' Цена'}
                </Paragraph>
                <FeedbackFormRadioGroup groupName="priceScore" />
              </div>

              <div id="qualityScore" className={styles.feedbackform__label}>
                <Paragraph>
                  <Span>*</Span>
                  {' Качество товара'}
                </Paragraph>
                <FeedbackFormRadioGroup groupName="qualityScore" />
              </div>

              {hasErrors(errors, touched) && <FeedbackFormMsg text={getErrorText(errors)} isError={true} />}

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
