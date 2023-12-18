import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import styles from './FavoritesPage.module.scss'

/**
 * Страница с избранными товарами
 */
const FavoritesPage = () => {
  return (
    <main className={styles.main}>
      <WrapperForMainContent>
        <div className={styles.content}>
          <Heading>Избранные товары</Heading>
          <Subheading>В разработке</Subheading>
        </div>
      </WrapperForMainContent>
    </main>
  )
}

export default FavoritesPage
