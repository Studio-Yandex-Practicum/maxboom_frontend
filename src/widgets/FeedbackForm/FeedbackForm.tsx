import { Formik, Field, Form, FormikHelpers } from 'formik'
import { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import type { StateSchema } from '@/app/providers/StoreProvider'
import { RequiredFieldTitle } from '@/features/RequiredFieldTitle/RequiredFieldTitle'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './FeedbackForm.module.scss'
import { SECCEED_SUBMIT_MESSAGE } from './model/constants/constants'
import { getErrorText, getQueryErrorText, hasErrors } from './model/functions/functions'
import { feedbackFormScheme } from './model/scheme/feedbackFormScheme'
import { postFeedback, feedbackFormActions } from './model/slice/feedbackFormSlice'
import type { IFeedbackFormValues } from './model/types/types'
import { FeedbackFormRadioGroup } from './ui/FeedbackFormRadioGroup/FeedbackFormRadioGroup'

/**
 * Widget формы добавления отзыва о магазине
 */
export const FeedbackForm: FC = () => {
  const [showMsg, setShowMsg] = useState(false)
  const [showApiErrorMsg, setShowApiErrorMsg] = useState(false)
  const dispatch = useAppDispatch()
  const feedbackForm = useSelector((store: StateSchema) => store.feedbackForm)

  const onSubmit = (values: IFeedbackFormValues, formikHelpers: FormikHelpers<IFeedbackFormValues>) => {
    dispatch(postFeedback({ values, formikHelpers }))
  }

  const onMsgClose = () => {
    dispatch(feedbackFormActions.reset())
    setShowMsg(false)
  }

  const onErrorMsgClose = () => {
    setShowApiErrorMsg(false)
  }

  useEffect(() => {
    if (feedbackForm.isSuccess && !feedbackForm.isLoading && feedbackForm.error === null) {
      setShowMsg(true)
    }

    if (feedbackForm.error) {
      setShowApiErrorMsg(true)
    }
  }, [feedbackForm.isLoading, feedbackForm.error, feedbackForm.isSuccess])

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
                <RequiredFieldTitle text="Имя"></RequiredFieldTitle>
                <Field name="author_name" type="text" className={styles.feedbackform__field} />
              </label>

              <label htmlFor="author_email" className={styles.feedbackform__label}>
                <Paragraph className={styles.feedbackform__fieldlabel}>Эл. почта</Paragraph>
                <Field name="author_email" type="email" className={styles.feedbackform__field} />
              </label>

              <label htmlFor="text" className={styles.feedbackform__label}>
                <RequiredFieldTitle text="Отзыв"></RequiredFieldTitle>
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
                <FormMsg
                  text={getErrorText(errors, touched)}
                  isError={true}
                  disableClose={true}
                  className={styles.feedbackform__msg}
                />
              )}

              {!isSubmitting && showApiErrorMsg && (
                <FormMsg
                  text={getQueryErrorText(feedbackForm.error)}
                  isError={true}
                  closeHandle={onErrorMsgClose}
                  disableClose={false}
                  className={styles.feedbackform__msg}
                />
              )}

              {!isSubmitting && showMsg && (
                <FormMsg
                  text={SECCEED_SUBMIT_MESSAGE}
                  isError={false}
                  closeHandle={onMsgClose}
                  className={styles.feedbackform__msg}
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
