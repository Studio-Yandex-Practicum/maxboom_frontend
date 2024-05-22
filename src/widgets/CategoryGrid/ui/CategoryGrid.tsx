import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import HeadingBlock from '@/entities/HeadingBlock'
import { TEXT_POPULAR_CATEGORIES } from '@/shared/constants/constants'
import { useResize } from '@/shared/libs/hooks/useResize'
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
  const { isScreenMd } = useResize()

  useEffect(() => {
    dispatch(getCategoryList())
  }, [])

  return (
    data.categoryList?.length !== 0 && (
      <section className={styles.categoryGrid}>
        <HeadingBlock title={TEXT_POPULAR_CATEGORIES} />

        {isScreenMd ? (
          <ul className={styles.categoryGrid__list}>
            {data.categoryList.map((card, index) => (
              <li key={card.id}>
                <CategoryCard card={card} index={index} />
              </li>
            ))}
          </ul>
        ) : (
          <Scroll>
            {data.categoryList.map((card, index) => (
              <li key={card.id}>
                <CategoryCard card={card} index={index} />
              </li>
            ))}
          </Scroll>
        )}
      </section>
    )
  )
}

export default CategoryGrid
