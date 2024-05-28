import { FC, useEffect } from 'react'

import BlogCard from '@/entities/BlogCard'
import HeadingBlock from '@/entities/HeadingBlock'
import LinkButton from '@/entities/LinkButton'
import { Routes } from '@/shared/config/routerConfig/routes'
import { LINK_SHOW_ALL, TEXT_BLOG } from '@/shared/constants/constants'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'
import Scroll from '@/shared/ui/Scroll/Scroll'

import useBlogArray from '../model/hooks/useBlogArray'
import { getBlogPosts } from '../model/services/getBlogPosts'

import styles from './BlogBlock.module.scss'

/**
 * Компонент BlogBlock - это список блогов для главной страницы MainPage.
 */

const BlogBlock: FC = () => {
  const dispatch = useAppDispatch()

  const { isScreenLg, isScreenMd } = useResize()
  const { threeBlogArray, fourBlogArray, mobileBlogArray, allBlogArray } = useBlogArray()

  const desktopBlogArray = isScreenLg ? fourBlogArray : threeBlogArray

  useEffect(() => {
    dispatch(getBlogPosts())
  }, [])

  return (
    allBlogArray?.length !== 0 && (
      <section className={styles.blogBlock}>
        <HeadingBlock title={TEXT_BLOG} isLink={true} subtitle={LINK_SHOW_ALL} link={Routes.BLOG} />

        {isScreenMd ? (
          <ul className={styles.grid}>
            {desktopBlogArray.map(item => (
              <li key={item.id}>
                <BlogCard id={item.id} image={item.image} date={item.pub_date} title={item.title} />
              </li>
            ))}
          </ul>
        ) : (
          <Scroll withManualGrip={true} className={styles.blogScroll}>
            {mobileBlogArray.map(item => (
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
