import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useEffect, useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import { getCurrentUserSelector } from '@/features/login/model/selectors/getUserAuthStatus'
import { RequiredFieldTitle } from '@/features/RequiredFieldTitle/RequiredFieldTitle'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'

import styles from './ChangeEmail.module.scss'
import { SECCEED_SUBMIT_MESSAGE } from './model/constants/constants'
import { getErrorText, getQueryErrorText, hasErrors } from './model/functions/functions'
import { IChangeEmailForm } from './model/scheme/changeEmailFormSliceScheme'
import { changeEmailFormActions, postNewEmail } from './model/slice/changeEmailFormSlice'
import { changeEmailFormScheme } from './model/validation/changeEmailFormScheme'

export const ChangeEmail: FC = () => {
  const navigate = useNavigate()
  const [showMsg, setShowMsg] = useState(false)
  const [showApiErrorMsg, setShowApiErrorMsg] = useState(false)
  const dispatch = useAppDispatch()
  const changeEmailForm = useSelector((store: StateSchema) => store.changeEmail)
  const curUser = useSelector(getCurrentUserSelector)

  const onMsgClose = () => {
    dispatch(changeEmailFormActions.reset())
    setShowMsg(false)
  }

  const onErrorMsgClose = () => {
    setShowApiErrorMsg(false)
  }

  useEffect(() => {
    if (changeEmailForm.isSuccess && !changeEmailForm.isLoading && changeEmailForm.error === null) {
      setShowMsg(true)
    }

    if (changeEmailForm.error) {
      setShowApiErrorMsg(true)
    }
  }, [changeEmailForm.isLoading, changeEmailForm.error, changeEmailForm.isSuccess])

  const onSubmit = async (values: IChangeEmailForm, formikHelpers: FormikHelpers<IChangeEmailForm>) => {
    const result = await dispatch(postNewEmail(values))
    if (result.meta.requestStatus === 'fulfilled') {
      formikHelpers.setErrors({})
      setShowMsg(true)
    }
  }

  const backBtnClickHandle = () => {
    navigate(Routes.ACCOUNT)
  }

  return (
    <section className={styles.changePasswordform}>
      <Formik
        enableReinitialize={true}
        initialValues={{
          new_email: curUser?.email || '',
          current_password: ''
        }}
        validationSchema={changeEmailFormScheme}
        onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className={styles.changePasswordform__form}>
              <label htmlFor="new_email" className={styles.changePasswordform__label}>
                <RequiredFieldTitle text="Новый E-mail"></RequiredFieldTitle>
                <Field
                  name="new_email"
                  type="email"
                  required
                  placeholder="Новый E-mail"
                  className={styles.changePasswordform__field}
                />
              </label>

              <label htmlFor="current_password" className={styles.changePasswordform__label}>
                <RequiredFieldTitle text="Текущий пароль"></RequiredFieldTitle>
                <Field
                  name="current_password"
                  type="password"
                  required
                  placeholder="Текущий пароль"
                  className={styles.changePasswordform__field}
                />
              </label>

              {hasErrors(errors, touched) && (
                <FormMsg
                  text={getErrorText(errors, touched)}
                  isError={true}
                  disableClose={true}
                  className={styles.changePasswordform__msg}
                />
              )}

              {!isSubmitting && showApiErrorMsg && (
                <FormMsg
                  text={getQueryErrorText(changeEmailForm.error)}
                  isError={true}
                  closeHandle={onErrorMsgClose}
                  disableClose={false}
                  className={styles.changePasswordform__msg}
                />
              )}

              {!isSubmitting && showMsg && (
                <FormMsg
                  text={SECCEED_SUBMIT_MESSAGE}
                  isError={false}
                  closeHandle={onMsgClose}
                  className={styles.changePasswordform__msg}
                />
              )}

              <div className={styles.changePasswordform__btnConteiner}>
                <Button
                  size={ButtonSize.S}
                  theme={ButtonTheme.SECONDARY}
                  type="button"
                  disabled={isSubmitting}
                  className={styles.changePasswordform__submitbtn}
                  onClick={backBtnClickHandle}>
                  Личный кабинет
                </Button>

                <Button
                  size={ButtonSize.S}
                  theme={ButtonTheme.PRIMARY}
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.changePasswordform__submitbtn}>
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
