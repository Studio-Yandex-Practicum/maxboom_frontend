import { useNavigate } from 'react-router'

import { Routes } from '@/shared/config/routerConfig/routes'
import { Button, ButtonDesign, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import CreateAccountForm from '@/widgets/CreateAccount/ui/CreateAccountForm'

import styles from './CreateAccountPage.module.scss'

/**
 * Страница регистрации
 */

const CreateAccountPage = () => {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate(`${Routes.LOGIN}`)
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Heading>Регистрация</Heading>
        <div className={styles.auth}>
          <Paragraph className={styles.paragraph}>У вас уже есть аккаунт?</Paragraph>
          <Button
            className={styles.button}
            theme={ButtonTheme.PRIMARY}
            design={ButtonDesign.SQUARE}
            size={ButtonSize.S}
            type="submit"
            onClick={handleRedirect}>
            Авторизация
          </Button>
        </div>
      </div>
      <CreateAccountForm></CreateAccountForm>
    </div>
  )
}
export default CreateAccountPage
