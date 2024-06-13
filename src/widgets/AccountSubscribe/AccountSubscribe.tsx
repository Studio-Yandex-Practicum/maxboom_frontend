import { FC } from 'react'

import IconEnvelop from '@/assets/icons/IconEnvelop.svg'
import { Routes } from '@/shared/config/routerConfig/routes'
import Link from '@/shared/ui/Link/Link'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './AccountSubscribe.module.scss'

/**
 *
 * Компонент подписки на странице аккаунта
 */
export const AccountSubscribe: FC = () => {
  return (
    <section className={styles.accountSubscribe}>
      <Link to={Routes.NEWSLETTER} className={styles.accountSubscribe__content}>
        <div>
          <IconEnvelop className={styles.accountSubscribe__icon} />
          <Paragraph className={styles.accountSubscribe__title}>Подписка</Paragraph>
        </div>
        <Paragraph className={styles.accountSubscribe__text}>
          Подписаться или отказаться от рассылки новостей
        </Paragraph>
      </Link>
    </section>
  )
}
