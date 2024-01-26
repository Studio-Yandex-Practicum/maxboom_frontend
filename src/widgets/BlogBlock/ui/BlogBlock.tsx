import { FC } from 'react'
import IconLink from '@/assets/icons/IconLink'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import styles from './BlogBlock.module.scss'
import Scroll from '@/shared/ui/Scroll/Scroll'
import { blogData } from '@/mockData/blogData'
import BlogCard from '@/entities/BlogCard/BlogCard'

/**
 * Блок группы карточек блога
 */

const BlogBlock: FC = () => {
  return (
    <section className={styles.wrapper}>
      <article>
        <Heading type={HeadingType.NORMAL}>Блог</Heading>
        <Link to={'#'} className={styles.link}>
          Показать все
          <IconLink styles={styles.svg}></IconLink>
        </Link>
      </article>
      <Scroll>
        {blogData.map(item => (
          <BlogCard key={item.id} card={item} />
        ))}
      </Scroll>
    </section>
  )
}

export default BlogBlock
