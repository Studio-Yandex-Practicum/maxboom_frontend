import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import HeadingBlock from '@/entities/HeadingBlock'
import NewsCard from '@/entities/NewsCard'
import { Routes } from '@/shared/config/routerConfig/routes'
import { LINK_NEWS_ALL, TEXT_NEWS } from '@/shared/constants/constants'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { getShopNewsSelector } from '../model/selectors/selectors'
import { getShopNews } from '../model/services/getShopNews'
import { ShopNewsData } from '../model/types/types'

import styles from './NewsBlock.module.scss'

/**
 * Компонент NewsBlock - это блок группы новостей. Отрисовывается на главной странице MainPage
 */

const NewsBlock: FC = () => {
  const dispatch = useAppDispatch()
  const news: ShopNewsData[] = useSelector(getShopNewsSelector)

  useEffect(() => {
    dispatch(getShopNews())
  }, [])

  return (
    news?.length !== 0 && (
      <section className={styles.newsBlock}>
        <HeadingBlock title={TEXT_NEWS} isLink={true} subtitle={LINK_NEWS_ALL} link={Routes.NEWS} />

        <Scroll>
          {news.map(item => (
            <li key={item.id}>
              <NewsCard id={item.id} image={item.image} date={item.pub_date} title={item.title} />
            </li>
          ))}
        </Scroll>
      </section>
    )
  )
}

export default NewsBlock
