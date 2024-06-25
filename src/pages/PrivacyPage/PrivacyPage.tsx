import { FC } from 'react'

import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'

import styles from './PrivacyPage.module.scss'

/**
 * Страница с политикой безопасности.
 * TODO наполнить страницу смыслом
 */
export const PrivacyPage: FC = () => {
  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Политика безопасности', href: '' }
  ]

  return (
    <WrapperForMainContent>
      <div className={styles.privacyPage}>
        <div className={styles.privacyPage__pageDescriptor}>
          <Heading>Политика безопасности</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.privacyPage__contant}>
          <Paragraph>Политика безопасности</Paragraph>
        </div>
      </div>
    </WrapperForMainContent>
  )
}
