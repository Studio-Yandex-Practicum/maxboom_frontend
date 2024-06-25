import { type FC } from 'react'
import { useNavigate } from 'react-router'

import defaultCard from '@/assets/images/categoryCards/placeholder-1200x800.png'
import { Routes } from '@/shared/config/routerConfig/routes'
import type { TCategory } from '@/shared/model/types/CategoryModel'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './CategoryCard.module.scss'

interface CategoryCardProps {
  category: TCategory
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const navigate = useNavigate()

  const clickHandle = () => {
    navigate(`${Routes.CATEGORIES}/${category.slug}?id=${category.id}`)
  }

  return (
    <div className={styles['category-card']} onClick={clickHandle}>
      {category && (
        <>
          <img
            src={category.image || defaultCard}
            alt={category.name}
            className={styles['category-card__img']}
          />
          <Paragraph className={styles['category-card__text']}>{category.name}</Paragraph>
        </>
      )}
    </div>
  )
}
