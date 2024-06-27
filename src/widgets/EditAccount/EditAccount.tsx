import classNames from 'classnames'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { useEffect, useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { StateSchema } from '@/app/providers/StoreProvider'
import { getCurrentUserSelector } from '@/features/login/model/selectors/getUserAuthStatus'
import { Routes } from '@/shared/config/routerConfig/routes'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import { FormMsg } from '@/shared/ui/FormMsg/FormMsg'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './EditAccount.module.scss'
import { SECCEED_SUBMIT_MESSAGE } from './model/constants/constants'
import { getErrorText, getQueryErrorText, hasErrors } from './model/functions/functions'
import { IUserprofile } from './model/scheme/editAccountFormSliceScheme'
import { editAccountFormActions, postAccount } from './model/slice/editAccountFormSlice'
import { editAccountFormScheme } from './model/validation/editAccountFormScheme'

export const EditAccount: FC = () => {
  const navigate = useNavigate()
  const [showMsg, setShowMsg] = useState(false)
  const [showApiErrorMsg, setShowApiErrorMsg] = useState(false)
  const dispatch = useAppDispatch()
  const editAccountForm = useSelector((store: StateSchema) => store.editAccount)
  const curUser = useSelector(getCurrentUserSelector)

  const onMsgClose = () => {
    dispatch(editAccountFormActions.reset())
    setShowMsg(false)
  }

  const onErrorMsgClose = () => {
    setShowApiErrorMsg(false)
  }

  useEffect(() => {
    if (editAccountForm.isSuccess && !editAccountForm.isLoading && editAccountForm.error === null) {
      setShowMsg(true)
    }

    if (editAccountForm.error) {
      setShowApiErrorMsg(true)
    }
  }, [editAccountForm.isLoading, editAccountForm.error, editAccountForm.isSuccess])

  const onSubmit = async (values: IUserprofile, formikHelpers: FormikHelpers<IUserprofile>) => {
    const result = await dispatch(postAccount(values))
    if (result.meta.requestStatus === 'fulfilled') {
      formikHelpers.setErrors({})
      setShowMsg(true)
    }
  }

  const backBtnClickHandle = () => {
    navigate(Routes.ACCOUNT)
  }

  return (
    <section className={styles.editAccountform}>
      <Heading className={styles.editAccountform__header}>Ваша учетная запись</Heading>
      <Formik
        enableReinitialize={true}
        initialValues={{
          first_name: curUser?.userprofile?.first_name || '',
          last_name: curUser?.userprofile?.last_name || '',
          about: curUser?.userprofile?.about || '',
          company: curUser?.userprofile?.company || '',
          is_vendor: curUser?.userprofile?.is_vendor || false
        }}
        validationSchema={editAccountFormScheme}
        onSubmit={onSubmit}>
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className={styles.editAccountform__form}>
              <label htmlFor="first_name" className={styles.editAccountform__label}>
                <Paragraph>Имя, Отчетство</Paragraph>
                <Field name="first_name" type="text" className={styles.editAccountform__field} />
              </label>

              <label htmlFor="last_name" className={styles.editAccountform__label}>
                <Paragraph>Фамилия</Paragraph>
                <Field name="last_name" type="text" className={styles.editAccountform__field} />
              </label>

              <label htmlFor="about" className={styles.editAccountform__label}>
                <Paragraph>Описание</Paragraph>
                <Field
                  name="about"
                  as="textarea"
                  className={classNames(
                    styles.editAccountform__field,
                    styles.editAccountform__field_textfield
                  )}
                />
              </label>

              <label htmlFor="company" className={styles.editAccountform__label}>
                <Paragraph>Наименование компании</Paragraph>
                <Field name="company" type="text" className={styles.editAccountform__field} />
              </label>

              <Checkbox name="is_vendor" htmlFor="is_vendor" type="checkbox" label="Оптовик" />

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
