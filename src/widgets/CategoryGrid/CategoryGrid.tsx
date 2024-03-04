import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { TEXT_POPULAR_CATEGORIES } from '@/shared/constants/constants'
import CategoryCard from '@/shared/ui/CategoryCard/ui/CategoryCard'
import Heading from '@/shared/ui/Heading/Heading'

import styles from './CategoryGrid.module.scss'
import { getCategoryListSelector } from './model/selectors/selectors'
import { getCategoryList } from './model/services/getCategoryList'

/**
 * Компонент сетки с карточками популярных категорий для главной страницы.
 */

const CategoryGrid = () => {
  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector(getCategoryListSelector)

  useEffect(() => {
    dispatch(getCategoryList())
  }, [])

  return (
    <section className={styles.section}>
      <Heading>{TEXT_POPULAR_CATEGORIES}</Heading>
      <ul className={styles.ul}>
        {data.categoryList.category.map((card, index) => (
          <CategoryCard card={card} index={index} key={card.id} />
        ))}
      </ul>
    </section>
  )
}

export default CategoryGrid
