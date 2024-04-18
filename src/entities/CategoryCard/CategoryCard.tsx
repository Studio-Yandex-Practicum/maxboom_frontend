import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './CategoryCard.module.scss'
import { getCategoryCard } from './getCategoryCard'
import { selectCategory } from './selectors' // селектор selectCategory для извлечения данных категории

export const CategoryCard: FC<{ categoryCard: string }> = ({ categoryCard }) => {
  const dispatch = useDispatch()
  const category = useSelector(state => selectCategory(state, categoryCard)) //  передаём selectCategory состояние и имя категории

  useEffect(() => {
    dispatch(getCategoryCard(categoryCard))
  }, [dispatch, categoryCard])

  return (
    <div className={styles['category-card']}>
      {category && (
        <>
          <img src={category.img} alt={category.name} className={styles['category-card__img']} />
          <Paragraph className={styles['category-card__text']}>{category.name}</Paragraph>
        </>
      )}
    </div>
  )
}
