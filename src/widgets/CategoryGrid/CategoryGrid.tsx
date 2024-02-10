import { catalogListData } from '@/mockData/catalogListData'
import { TEXT_POPULAR_CATEGORIES } from '@/shared/constants/constants'
import CategoryCard from '@/shared/ui/CategoryCard/ui/CategoryCard'
import Heading from '@/shared/ui/Heading/Heading'

import styles from './CategoryGrid.module.scss'

/**
 * Компонент сетки с карточками популярных категорий для главной страницы.
 */
const CategoryGrid = () => {
  return (
    <section className={styles.section}>
      <Heading>{TEXT_POPULAR_CATEGORIES}</Heading>
      <ul className={styles.ul}>
        {catalogListData.map((card, index) => (
          <CategoryCard card={card} index={index} key={card.id.toString()} />
        ))}
      </ul>
    </section>
  )
}

export default CategoryGrid
