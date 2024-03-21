import { Formik, Field, Form } from 'formik'
import { FC } from 'react'

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import Span from '@/shared/ui/Span/Span'

import styles from './FeedbackForm.module.scss'
import { feedbackFormScheme } from './model/scheme/feedbackFormScheme'
import { FeedbackFormMsg } from './ui/FeedbackFormMsg/FeedbackFormMsg'
import { FeedbackFormRadioBtn } from './ui/FeedbackFormRadioBtn/FeedbackFormRadioBtn'

export const FeedbackForm: FC = () => {
  const onSubmit = (/* values, { setSubmitting } */) => {
    console.log('submit')
    //setSubmitting(false)
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
                <FeedbackFormRadioBtn groupName="deliverySpeedScore" />
              </div>

              <div id="priceScore" className={styles.feedbackform__label}>
                <Paragraph>
                  <Span>*</Span>
                  {' Цена'}
                </Paragraph>
                <FeedbackFormRadioBtn groupName="priceScore" />
              </div>

              <div id="qualityScore" className={styles.feedbackform__label}>
                <Paragraph>
                  <Span>*</Span>
                  {' Качество товара'}
                </Paragraph>
                <FeedbackFormRadioBtn groupName="qualityScore" />
              </div>

              {((errors.text && touched.text) ||
                (errors.email && touched.email) ||
                (errors.username && touched.username) ||
                (errors.deliverySpeedScore && touched.deliverySpeedScore) ||
                (errors.priceScore && touched.priceScore) ||
                (errors.qualityScore && touched.qualityScore)) && (
                <FeedbackFormMsg
                  text={
                    errors.text ||
                    errors.email ||
                    errors.username ||
                    errors.deliverySpeedScore ||
                    errors.priceScore ||
                    errors.qualityScore ||
                    'Ошибка'
                  }
                  isError={true}
                />
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
