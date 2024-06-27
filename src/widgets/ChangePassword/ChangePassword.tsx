import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useEffect, useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import { RequiredFieldTitle } from '@/features/RequiredFieldTitle/RequiredFieldTitle'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'
import Heading from '@/shared/ui/Heading/Heading'

import styles from './ChangePassword.module.scss'
import { SECCEED_SUBMIT_MESSAGE } from './model/constants/constants'
import { getErrorText, getQueryErrorText, hasErrors } from './model/functions/functions'
import { IChangePasswordForm } from './model/scheme/changePasswordFormSliceScheme'
import { changePasswordFormActions, postNewPassword } from './model/slice/changePasswordtFormSlice'
import { changePasswordFormScheme } from './model/validation/changePasswordFormScheme'

export const ChangePassword: FC = () => {
  const navigate = useNavigate()
  const [showMsg, setShowMsg] = useState(false)
  const [showApiErrorMsg, setShowApiErrorMsg] = useState(false)
  const dispatch = useAppDispatch()
  const changePasswordForm = useSelector((store: StateSchema) => store.changePassword)

  const onMsgClose = () => {
    dispatch(changePasswordFormActions.reset())
    setShowMsg(false)
  }

  const onErrorMsgClose = () => {
    setShowApiErrorMsg(false)
  }

  useEffect(() => {
    if (changePasswordForm.isSuccess && !changePasswordForm.isLoading && changePasswordForm.error === null) {
      setShowMsg(true)
    }

    if (changePasswordForm.error) {
      setShowApiErrorMsg(true)
    }
  }, [changePasswordForm.isLoading, changePasswordForm.error, changePasswordForm.isSuccess])

  const onSubmit = async (values: IChangePasswordForm, formikHelpers: FormikHelpers<IChangePasswordForm>) => {
    const { current_password, new_password } = values
    const result = await dispatch(postNewPassword({ current_password, new_password }))
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
      <Heading className={styles.changePasswordform__header}>Пароль</Heading>
      <Formik
        enableReinitialize={true}
        initialValues={{
          current_password: '',
          new_password: '',
          new_passwordConfirmation: ''
        }}
        validationSchema={changePasswordFormScheme}
        onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className={styles.changePasswordform__form}>
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

              <label htmlFor="new_password" className={styles.changePasswordform__label}>
                <RequiredFieldTitle text="Новый пароль"></RequiredFieldTitle>
                <Field
                  name="new_password"
                  type="password"
                  required
                  placeholder="Новый пароль"
                  className={styles.changePasswordform__field}
                />
              </label>

              <label htmlFor="new_passwordConfirmation" className={styles.changePasswordform__label}>
                <RequiredFieldTitle text="Подтвердите новый пароль"></RequiredFieldTitle>
                <Field
                  name="new_passwordConfirmation"
                  type="password"
                  required
                  placeholder="Подтверждение нового пароля"
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
                  text={getQueryErrorText(changePasswordForm.error)}
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
