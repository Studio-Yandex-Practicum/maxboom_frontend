import { type FC } from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '@/app/providers/StoreProvider/config/store'
import { setCategoryId } from '@/entities/Category/slice/categoryIdSlice'
import { setCategorySlug } from '@/entities/Category/slice/categorySlugSlice'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TCategory } from '@/shared/model/types/CategoryModel'
import Link from '@/shared/ui/Link/Link'

import Subheading from '../../Subheading/Subheading'
import { COLORS } from '../constants/constants'

import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  card: Partial<TCategory>
  index: number
}

/**
 * Компонент карточки популярной категории для главной страницы.
 * @param {object} card - объект категории для отображения названия и фотографии;
 * @param {number} index - индекс элемента массива категорий для выбора цвета;
 */
const CategoryCard: FC<CategoryCardProps> = ({ card, index }) => {
  const dispatch = useDispatch<AppDispatch>()
  return (
    <li>
      <Link
        to={`${Routes.CATEGORIES}/${card.slug}`}
        onClick={() => {
          dispatch(setCategoryId(card.id))
          dispatch(setCategorySlug(card.slug))
        }}
        className={styles.div}
        style={{ backgroundColor: COLORS[index], backgroundImage: `url(${card.image})` }}>
        <Subheading className={styles.subheading}>{card.name}</Subheading>
      </Link>
    </li>
  )
}

export default CategoryCard
