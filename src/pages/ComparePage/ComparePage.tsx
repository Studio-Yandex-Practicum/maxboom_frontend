import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import styles from './ComparePage.module.scss'

/**
 * Страница сравнения товаров
 */
const ComparePage = () => {
  return (
    <main className={styles.main}>
      <WrapperForMainContent>
        <div className={styles.content}>
          <Heading>Сравнение товаров</Heading>
          <Subheading>В разработке</Subheading>
        </div>
      </WrapperForMainContent>
    </main>
  )
}

export default ComparePage
