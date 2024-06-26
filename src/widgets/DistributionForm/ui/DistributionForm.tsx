import { Form, Formik } from 'formik'
import { useNavigate } from 'react-router'

import { Routes } from '@/shared/config/routerConfig/routes'
import { Button, ButtonDesign, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Checkbox from '@/shared/ui/Checkbox/Checkbox'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Label from '@/shared/ui/Label/Label'

import { IDistributionForm } from '../modal/types'

import styles from './DistributionForm.module.scss'

const initialValues: IDistributionForm = {
  subscription: String('Нет')
}

const subscription = [
  { label: 'Да', value: 'Да' },
  { label: 'Нет', value: 'Нет' }
]

const DistributionForm = () => {
  const navigate = useNavigate()
  function handleRedirectPrevious() {
    navigate(Routes.ACCOUNT)
  }
  function handleRedirectNext() {
    navigate(Routes.ACCOUNT)
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false)
        resetForm()
      }}>
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <Heading type={HeadingType.NORMAL} className={styles.form__title}>
            Рассылка
          </Heading>
          <Label htmlFor="subscription" className={`${styles.form__label}`}>
            Подписаться
            <ul className={styles.form__list}>
              {subscription.map(option => {
                return (
                  <li key={option.value}>
                    <Checkbox
                      className={styles.form__radio}
                      htmlFor="subscription"
                      label={option.label}
                      name="subscription"
                      value={option.value}
                    />
                  </li>
                )
              })}
            </ul>
          </Label>
          <div className={styles.form__buttons}>
            <Button
              theme={ButtonTheme.PREVIOUS}
              design={ButtonDesign.SQUARE}
              size={ButtonSize.S}
              type="submit"
              onClick={handleRedirectPrevious}
              disabled={isSubmitting}>
              Назад
            </Button>
            <Button
              theme={ButtonTheme.PRIMARY}
              design={ButtonDesign.SQUARE}
              size={ButtonSize.S}
              type="submit"
              onClick={handleRedirectNext}
              disabled={isSubmitting}>
              Продолжить
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}
export default DistributionForm
