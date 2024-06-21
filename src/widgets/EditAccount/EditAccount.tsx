import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import { RequiredFieldTitle } from '@/features/RequiredFieldTitle/RequiredFieldTitle'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'
import Heading from '@/shared/ui/Heading/Heading'

import styles from './EditAccount.module.scss'
import { SECCEED_SUBMIT_MESSAGE } from './model/constants/constants'
import { getErrorText, getQueryErrorText, hasErrors } from './model/functions/functions'
import { editAccountFormScheme } from './model/scheme/editAccountFormScheme'
import { editAccountFormActions, postAccount } from './model/slice/editAccountFormSlice'
import { IEditAccountFormValues } from './model/types/types'

export const EditAccount: FC = () => {
  const navigate = useNavigate()
  const [showMsg, setShowMsg] = useState(false)
  const [showApiErrorMsg, setShowApiErrorMsg] = useState(false)
  const dispatch = useAppDispatch()
  const editAccountForm = useSelector((store: StateSchema) => store.editAccount)

  const onMsgClose = () => {
    dispatch(editAccountFormActions.reset())
    setShowMsg(false)
  }

  const onErrorMsgClose = () => {
    setShowApiErrorMsg(false)
  }

  const onSubmit = (values: IEditAccountFormValues, formikHelpers: FormikHelpers<IEditAccountFormValues>) => {
    dispatch(postAccount({ values, formikHelpers }))
  }

  const backBtnClickHandle = () => {
    navigate(Routes.ACCOUNT)
  }

  return (
    <section className={styles.editAccountform}>
      <Heading className={styles.editAccountform__header}>Ваша учетная запись</Heading>
      <Formik
        initialValues={{
          email: '',
          name: '',
          familyName: '',
          phone: '+7'
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
                <RequiredFieldTitle text="Эл. почта"></RequiredFieldTitle>
                <Field name="email" type="email" className={styles.editAccountform__field} />
              </label>

              <label htmlFor="phone" className={styles.editAccountform__label}>
                <RequiredFieldTitle text="Телефон"></RequiredFieldTitle>
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
                  text={getQueryErrorText(editAccountForm.error)}
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

              <div className={styles.editAccountform__btnConteiner}>
                <Button
                  size={ButtonSize.S}
                  theme={ButtonTheme.SECONDARY}
                  type="button"
                  disabled={isSubmitting}
                  className={styles.editAccountform__submitbtn}
                  onClick={backBtnClickHandle}>
                  Личный кабинет
                </Button>

                <Button
                  size={ButtonSize.S}
                  theme={ButtonTheme.PRIMARY}
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.editAccountform__submitbtn}>
                  Продолжить
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </section>
  )
}
