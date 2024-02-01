import { FC, useEffect } from 'react'
import { getShopNewsSelector } from '../model/selectors/selectors'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { getShopNews } from '../model/services/getShopNews'
import IconLink from '@/assets/icons/IconLink'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import styles from './NewsBlock.module.scss'
import NewsCard from '@/entities/NewsCard/NewsCard'
import Scroll from '@/shared/ui/Scroll/Scroll'

/**
 * Блок группы новостей
 */
const NewsBlock: FC = () => {
  const dispatch = useAppDispatch()
  const news = useSelector(getShopNewsSelector)

  useEffect(() => {
    dispatch(getShopNews())
  }, [])

  return (
    <section className={styles.wrapper}>
      <article>
        <Heading type={HeadingType.NORMAL}>Новости</Heading>
        <Link to={'#'} className={styles.link}>
          Все новости
          <IconLink styles={styles.svg}></IconLink>
        </Link>
      </article>
      <Scroll>
        {news.map(item => (
          <NewsCard key={item.id} id={item.id} image={item.image} date={item.pub_date} title={item.title} />
        ))}
      </Scroll>
    </section>
  )
}

export default NewsBlock
