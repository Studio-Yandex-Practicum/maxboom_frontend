import { FC, useEffect } from 'react'
import { getBlogPosts } from '../model/services/getBlogPosts'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { getBlogPostsSelector } from '../model/selectors/selectors'
import { useSelector } from 'react-redux'
import IconLink from '@/assets/icons/IconLink'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import styles from './BlogBlock.module.scss'
import Scroll from '@/shared/ui/Scroll/Scroll'
import BlogCard from '@/entities/BlogCard/BlogCard'

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
