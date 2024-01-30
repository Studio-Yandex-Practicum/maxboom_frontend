import { FC } from 'react'
import IconLink from '@/assets/icons/IconLink'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import styles from './NewsBlock.module.scss'
import NewsCard from '@/entities/NewsCard/NewsCard'
import { newsData } from '@/mockData/newsData'
import Scroll from '@/shared/ui/Scroll/Scroll'

/**
 * Блок группы новостей
 */
const NewsBlock: FC = () => {
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
        {newsData.map(item => (
          <NewsCard key={item.id} card={item} />
        ))}
      </Scroll>
    </section>
  )
}

export default NewsBlock
