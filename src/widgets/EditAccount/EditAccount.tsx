import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useState, type FC } from 'react'

import { RequiredFieldTitle } from '@/features/RequiredFieldTitle/RequiredFieldTitle'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './EditAccount.module.scss'
import { SECCEED_SUBMIT_MESSAGE } from './model/constants/constants'
import { getErrorText, hasErrors } from './model/functions/functions'
import { editAccountFormScheme } from './model/scheme/editAccountFormScheme'
import { IEditAccountFormValues } from './model/types/types'

export const EditAccount: FC = () => {
  const [showMsg, setShowMsg] = useState(false)
  const [showApiErrorMsg, setShowApiErrorMsg] = useState(false)

  const onMsgClose = () => {
    //dispatch(feedbackFormActions.reset())
    setShowMsg(false)
  }

  const onErrorMsgClose = () => {
    setShowApiErrorMsg(false)
  }

  const onSubmit = (values: IEditAccountFormValues, formikHelpers: FormikHelpers<IEditAccountFormValues>) => {
    console.log(values, formikHelpers)
    //dispatch(postFeedback({ values, formikHelpers }))
  }

  return (
    <section className={styles.editAccountform}>
      <Heading className={styles.editAccountform__header}>Ваша учетная запись</Heading>
      <Formik
        initialValues={{
          email: '',
          name: '',
          familyName: '',
          phone: ''
        }}
        validationSchema={editAccountFormScheme}
        onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className={styles.editAccountform__form}>
              <label htmlFor="name" className={styles.editAccountform__label}>
                <RequiredFieldTitle text="Имя, Отчетство"></RequiredFieldTitle>
                <Field name="name" type="text" className={styles.editAccountform__field} />
              </label>

              <label htmlFor="familyName" className={styles.editAccountform__label}>
                <RequiredFieldTitle text="Фамилия"></RequiredFieldTitle>
                <Field name="familyName" type="text" className={styles.editAccountform__field} />
              </label>

              <label htmlFor="email" className={styles.editAccountform__label}>
                <Paragraph className={styles.editAccountform__fieldlabel}>Эл. почта</Paragraph>
                <Field name="email" type="email" className={styles.editAccountform__field} />
              </label>

              <label htmlFor="phone" className={styles.editAccountform__label}>
                <Paragraph className={styles.editAccountform__fieldlabel}>Эл. почта</Paragraph>
                <Field name="phone" type="phone" className={styles.editAccountform__field} />
              </label>

              {hasErrors(errors, touched) && (
                <FormMsg
                  text={getErrorText(errors, touched)}
                  isError={true}
                  disableClose={true}
                  className={styles.editAccountform__msg}
                />
              )}

              {!isSubmitting && showApiErrorMsg && (
                <FormMsg
                  /* text={getQueryErrorText(feedbackForm.error)} */
                  text={''}
                  isError={true}
                  closeHandle={onErrorMsgClose}
                  disableClose={false}
                  className={styles.editAccountform__msg}
                />
              )}

              {!isSubmitting && showMsg && (
                <FormMsg
                  text={SECCEED_SUBMIT_MESSAGE}
                  isError={false}
                  closeHandle={onMsgClose}
                  className={styles.editAccountform__msg}
                />
              )}

              <Button
                size={ButtonSize.S}
                theme={ButtonTheme.PRIMARY}
                type="submit"
                disabled={isSubmitting}
                className={styles.editAccountform__submitbtn}>
                Оставить отзыв
              </Button>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}
