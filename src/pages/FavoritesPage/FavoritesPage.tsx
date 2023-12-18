import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import Heading from '@/shared/ui/Heading/Heading'
import Subheading from '@/shared/ui/Subheading/Subheading'
import styles from './FavoritesPage.module.scss'

/**
 * Страница с избранными товарами
 */
const FavoritesPage = () => {
  return (
    <WrapperForMainContent>
      <Heading className={styles.heading}>Избранные товары</Heading>
      <Subheading>В разработке</Subheading>
    </WrapperForMainContent>
  )
}

export default FavoritesPage
