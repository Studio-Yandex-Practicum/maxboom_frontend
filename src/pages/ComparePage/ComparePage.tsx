import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'

import styles from './ComparePage.module.scss'

/**
 * Страница сравнения товаров
 */
const ComparePage = () => {
  return (
    <WrapperForMainContent>
      <Heading className={styles.heading}>Сравнение товаров</Heading>
      <Subheading>В разработке</Subheading>
    </WrapperForMainContent>
  )
}

export default ComparePage
