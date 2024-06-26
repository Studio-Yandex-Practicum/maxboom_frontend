import { FC, useEffect } from 'react'

import NewsCard from '@/entities/NewsCard'
import { useAppDispatch } from '@/shared/libs/hooks/store'

import useNewsArray from '../../model/hooks/useNewsArray'
import { getShopNews } from '../../model/services/getShopNews'

import styles from './ShopNewsWidget.module.scss'

/**
 * Компонент ShopNewsWidget - это блок группы новостей. Отрисовывается на главной странице ShopNewsPage
 */

const ShopNewsWidget: FC = () => {
  const dispatch = useAppDispatch()
  const { allNewsArray } = useNewsArray()

  useEffect(() => {
    dispatch(getShopNews())
  }, [])

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {allNewsArray.map(item => (
          <li key={item.id} className={styles.item}>
            <NewsCard
              id={item.id}
              image={item.image}
              date={item.pub_date}
              title={item.title}
              link={item.slug}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ShopNewsWidget
