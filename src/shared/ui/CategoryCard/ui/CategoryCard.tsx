import { type FC } from 'react'
import { Routes } from '@/shared/config/routerConfig/routes'
import { TCategory } from '@/models/CategoryModel'
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
  return (
    <li>
      <Link
        to={`${Routes.PRODUCTS}${card.slug}`}
        className={styles.div}
        style={{ backgroundColor: COLORS[index], backgroundImage: `url(${card.image})` }}>
        <Subheading className={styles.subheading}>{card.name}</Subheading>
      </Link>
    </li>
  )
}

export default CategoryCard
