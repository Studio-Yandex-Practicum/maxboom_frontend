import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import HeadingBlock from '@/entities/HeadingBlock'
import { TEXT_POPULAR_CATEGORIES } from '@/shared/constants/constants'
import CategoryCard from '@/shared/ui/CategoryCard/ui/CategoryCard'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { getCategoryListSelector } from '../model/selectors/selectors'
import { getCategoryList } from '../model/services/getCategoryList'

import styles from './CategoryGrid.module.scss'

/**
 * Компонент сетки с карточками популярных категорий для главной страницы.
 */

const CategoryGrid: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector(getCategoryListSelector)

  useEffect(() => {
    dispatch(getCategoryList())
  }, [])

  return (
    data.categoryList?.length !== 0 && (
      <section className={styles.categoryGrid}>
        <HeadingBlock title={TEXT_POPULAR_CATEGORIES} />

        <Scroll>
          {data.categoryList.map((card, index) => (
            <CategoryCard card={card} index={index} key={card.id} />
          ))}
        </Scroll>
      </section>
    )
  )
}

export default CategoryGrid
