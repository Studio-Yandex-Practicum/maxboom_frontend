import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

// import { Pagination } from '@/components/Pagination/Pagination'

import BlogCard from '@/entities/BlogCard'
import BlogMainItem from '@/entities/BlogMainItem'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { useResize } from '@/shared/libs/hooks/useResize'

import { getBlogPostsSelector } from '../../BlogBlock/model/selectors/selectors'
import { getBlogPosts } from '../../BlogBlock/model/services/getBlogPosts'
import { IBlogPostData } from '../../BlogBlock/model/types/types'

import styles from './blog-main.module.scss'

/**
 * Компонент BlogMain это основной контент который отрисовывается на странице BlogPage
 */

const BlogMain: FC = () => {
  const dispatch = useAppDispatch()
  const posts: IBlogPostData[] = useSelector(getBlogPostsSelector)
  const { isScreenMd } = useResize()

  useEffect(() => {
    dispatch(getBlogPosts())
  }, [])

  return (
    <section className={styles.blogMain}>
      {/* Это временный компонент  */}
      {isScreenMd && <BlogMainItem />}

      <ul className={styles.blogMain__list}>
        {posts.map(item => (
          <li key={item.id}>
            <BlogCard
              id={item.id}
              image={item.image}
              date={item.pub_date}
              title={item.title}
              tags={item.tags}
              views={item.views}
              isBlog={true}
            />
          </li>
        ))}
      </ul>

      {/* Далее буду использовать пагинацию, как это сделано на странице ProductsPage

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        handleShowMore={handleShowMore}
      /> */}
    </section>
  )
}

export default BlogMain
