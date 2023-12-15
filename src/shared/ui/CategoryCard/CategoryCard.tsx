import { FC } from 'react'
import Link from '@/shared/ui/Link/Link'
import Subheading from '../Subheading/Subheading'
import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  card: {
    id: number
    image: string
    name: string
    url: string
  }
  index: number
}

/**
 * Компонент карточки популярной категории для главной страницы.
 * @param {object} card - объект категории для отображения названия и фотографии;
 * @param {number} index - индекс элемента массива категорий для выбора цвета;
 */
const CategoryCard: FC<CategoryCardProps> = ({ card, index }) => {
  const COLORS = ['#6f94dc', '#9bcad7', '#7266f3', '#beced8', '#bcd4d8', '#95d6b4']

  return (
    <li>
      <Link
        to={card.url}
        className={styles.div}
        style={{ backgroundColor: COLORS[index], backgroundImage: `url(${card.image})` }}>
        <Subheading className={styles.Subheading}>{card.name}</Subheading>
      </Link>
    </li>
  )
}

export default CategoryCard
