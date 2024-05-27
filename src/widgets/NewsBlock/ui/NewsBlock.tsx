import { FC, useEffect } from 'react'

import HeadingBlock from '@/entities/HeadingBlock'
import LinkButton from '@/entities/LinkButton'
import NewsCard from '@/entities/NewsCard'
import { Routes } from '@/shared/config/routerConfig/routes'
import { LINK_NEWS_ALL, TEXT_NEWS } from '@/shared/constants/constants'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
import Scroll from '@/shared/ui/Scroll/Scroll'

import useNewsArray from '../model/hooks/useNewsArray'
import { getShopNews } from '../model/services/getShopNews'

import styles from './NewsBlock.module.scss'

/**
 * Компонент NewsBlock - это блок группы новостей. Отрисовывается на главной странице MainPage
 */

const NewsBlock: FC = () => {
  const dispatch = useAppDispatch()

  const { isScreenLg, isScreenMd } = useResize()
  const { threeNewsArray, fourNewsArray, mobileNewsArray, allNewsArray } = useNewsArray()

  const desktopNewsArray = isScreenLg ? fourNewsArray : threeNewsArray

  useEffect(() => {
    dispatch(getShopNews())
  }, [])

  return (
    allNewsArray?.length !== 0 && (
      <section className={styles.newsBlock}>
        <HeadingBlock title={TEXT_NEWS} isLink={true} subtitle={LINK_NEWS_ALL} link={Routes.NEWS} />
        {isScreenMd ? (
          <ul className={styles.grid}>
            {desktopNewsArray.map(item => (
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
            {mobileNewsArray.map(item => (
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
