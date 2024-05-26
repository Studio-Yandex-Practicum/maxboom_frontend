import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import HeadingBlock from '@/entities/HeadingBlock'
import LinkButton from '@/entities/LinkButton'
import NewsCard from '@/entities/NewsCard'
import { Routes } from '@/shared/config/routerConfig/routes'
import {
  LINK_NEWS_ALL,
  TEXT_NEWS,
  VIEW_FOUR_ITEMS,
  VIEW_TEN_ITEMS,
  VIEW_THREE_ITEMS
} from '@/shared/constants/constants'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
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
  const { isScreenLg, isScreenMd } = useResize()

  const fourNewsArray = news.slice(0, VIEW_FOUR_ITEMS)
  const threeNewsArray = news.slice(0, VIEW_THREE_ITEMS)
  const mobileArray = news.slice(0, VIEW_TEN_ITEMS)
  const desktopArray = isScreenLg ? fourNewsArray : threeNewsArray

  useEffect(() => {
    dispatch(getShopNews())
  }, [])

  return (
    news?.length !== 0 && (
      <section className={styles.newsBlock}>
        <HeadingBlock title={TEXT_NEWS} isLink={true} subtitle={LINK_NEWS_ALL} link={Routes.NEWS} />
        {isScreenMd ? (
          <ul className={styles.grid}>
            {desktopArray.map(item => (
              <li key={item.id}>
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
        ) : (
          <Scroll withManualGrip={true}>
            {mobileArray.map(item => (
              <li key={item.id}>
                <NewsCard
                  id={item.id}
                  image={item.image}
                  date={item.pub_date}
                  title={item.title}
                  link={item.slug}
                />
              </li>
            ))}
            <LinkButton link={Routes.NEWS} text={LINK_NEWS_ALL} />
          </Scroll>
        )}
      </section>
    )
  )
}

export default NewsBlock
