import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import IconLink from '@/assets/icons/IconLink'
import BlogCard from '@/entities/BlogCard/BlogCard'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { getBlogPostsSelector } from '../model/selectors/selectors'
import { getBlogPosts } from '../model/services/getBlogPosts'

import styles from './BlogBlock.module.scss'

/**
 * Блок группы карточек блога
 */

const BlogBlock: FC = () => {
  const dispatch = useAppDispatch()
  const posts = useSelector(getBlogPostsSelector)

  useEffect(() => {
    dispatch(getBlogPosts())
  }, [])

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
        {posts.map(item => (
          <BlogCard key={item.id} id={item.id} image={item.image} date={item.pub_date} title={item.title} />
        ))}
      </Scroll>
    </section>
  )
}

export default BlogBlock
