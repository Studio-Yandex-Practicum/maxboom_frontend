import { FC } from 'react'

import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'

import styles from './TermsPage.module.scss'

/**
 * Страница с условиями соглашения.
 * TODO наполнить страницу смыслом
 */
export const TermsPage: FC = () => {
  const links = [
    { heading: 'Главная', href: '/' },
    { heading: 'Условия соглашения', href: '' }
  ]

  return (
    <WrapperForMainContent>
      <div className={styles.termsPage}>
        <div className={styles.termsPage__pageDescriptor}>
          <Heading>Условия соглашения</Heading>
          <Breadcrumbs links={links} />
        </div>
        <div className={styles.termsPage__contant}>
          <Paragraph>Условия соглашения</Paragraph>
        </div>
      </div>
    </WrapperForMainContent>
  )
}
