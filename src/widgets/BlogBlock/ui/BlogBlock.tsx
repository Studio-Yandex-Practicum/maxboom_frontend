import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import BlogCard from '@/entities/BlogCard'
import HeadingBlock from '@/entities/HeadingBlock'
import LinkButton from '@/entities/LinkButton'
import { Routes } from '@/shared/config/routerConfig/routes'
import {
  LINK_SHOW_ALL,
  TEXT_BLOG,
  VIEW_FOUR_ITEMS,
  VIEW_TEN_ITEMS,
  VIEW_THREE_ITEMS
} from '@/shared/constants/constants'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { getBlogPostsSelector } from '../model/selectors/selectors'
import { getBlogPosts } from '../model/services/getBlogPosts'
import { IBlogPostData } from '../model/types/types'

import styles from './BlogBlock.module.scss'

/**
 * Компонент BlogBlock - это список блогов для главной страницы MainPage.
 */

const BlogBlock: FC = () => {
  const dispatch = useAppDispatch()
  const posts: IBlogPostData[] = useSelector(getBlogPostsSelector)

  const { isScreenLg, isScreenMd } = useResize()

  const fourBlogArray = posts.slice(0, VIEW_FOUR_ITEMS)
  const threeBlogArray = posts.slice(0, VIEW_THREE_ITEMS)
  const mobileArray = posts.slice(0, VIEW_TEN_ITEMS)
  const desktopArray = isScreenLg ? fourBlogArray : threeBlogArray

  useEffect(() => {
    dispatch(getBlogPosts())
  }, [])

  return (
    posts?.length !== 0 && (
      <section className={styles.blogBlock}>
        <HeadingBlock title={TEXT_BLOG} isLink={true} subtitle={LINK_SHOW_ALL} link={Routes.BLOG} />

        {isScreenMd ? (
          <ul className={styles.grid}>
            {desktopArray.map(item => (
              <li key={item.id}>
                <BlogCard id={item.id} image={item.image} date={item.pub_date} title={item.title} />
              </li>
            ))}
          </ul>
        ) : (
          <Scroll withManualGrip={true} className={styles.blogScroll}>
            {mobileArray.map(item => (
              <li key={item.id}>
                <BlogCard id={item.id} image={item.image} date={item.pub_date} title={item.title} />
              </li>
            ))}
            <LinkButton link={Routes.BLOG} text={LINK_SHOW_ALL} />
          </Scroll>
        )}
      </section>
    )
  )
}

export default BlogBlock
