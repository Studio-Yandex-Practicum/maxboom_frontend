import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import IconLink from '@/assets/icons/IconLink'
import NewsCard from '@/entities/NewsCard/NewsCard'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { getShopNewsSelector } from '../model/selectors/selectors'
import { getShopNews } from '../model/services/getShopNews'
import { ShopNewsData } from '../model/types/types'
import NewsBlockSkeleton from '../NewsBlockSkeleton/NewsBlockSkeleton'

import styles from './NewsBlock.module.scss'

/**
 * Блок группы новостей
 */
const NewsBlock: FC = () => {
  const dispatch = useAppDispatch()
  const news: ShopNewsData[] = useSelector(getShopNewsSelector)

  useEffect(() => {
    dispatch(getShopNews())
  }, [])

  return (
    news.length != 0 && (
      <section className={styles.wrapper}>
        <article>
          <Heading type={HeadingType.NORMAL}>Новости</Heading>
          <Link to={'#'} className={styles.link}>
            Все новости
            <IconLink styles={styles.svg}></IconLink>
          </Link>
        </article>
        <Scroll>
          {news.length === 0
            ? Array.from({ length: 5 }).map((_, index) => <NewsBlockSkeleton key={index} />)
            : news.map(item => (
                <NewsCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  date={item.pub_date}
                  title={item.title}
                />
              ))}
        </Scroll>
      </section>
    )
  )
}

export default NewsBlock
