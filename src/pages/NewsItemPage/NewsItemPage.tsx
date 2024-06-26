import { type FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import NewsItemPageSkeleton from '@/pages/NewsItemPage/NewsItemPageSkeleton/NewsItemPageSkeleton'
import { getLoading, getNewsItemSelector } from '@/pages/NewsItemPage/selectors/selectors'
import { getNewsItemPage } from '@/pages/NewsItemPage/services/getNewsItemPage'
import { Routes } from '@/shared/config/routerConfig/routes'
import { scrollPageToTop } from '@/shared/libs/helpers/scrollPageToTop'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Breadcrumbs from '@/shared/ui/Breadcrumbs/Breadcrumbs'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import WrapperForMainContent from '@/shared/ui/WrapperForMainContent/WrapperForMainContent'
import Img from '@/ui/img'

import styles from './NewsItemPage.module.scss'

/**
 * Страница одной новости
 * @param {string} slug - URL новости
 */
const NewsItemPage: FC = () => {
  const dispatch = useAppDispatch()
  const { slug } = useParams()
  const news = useSelector(getNewsItemSelector)
  const isLoading = useSelector(getLoading)
  // const isLoading = true

  const links = [
    { heading: 'Главная', href: Routes.HOME },
    { heading: 'Новости', href: Routes.NEWS },
    { heading: news.title, href: '' }
  ]

  useEffect(() => {
    scrollPageToTop()
    if (slug) dispatch(getNewsItemPage(slug))
  }, [slug])

  return (
    <WrapperForMainContent>
      {isLoading ? (
        <NewsItemPageSkeleton />
      ) : (
        <>
          <div className={styles.heading}>
            <Heading type={HeadingType.MAIN}>{news.title}</Heading>
            <Breadcrumbs links={links} />
          </div>
          <article className={styles.newsPage}>
            <Img srcSet={news.image} className={styles.headImage} />
            <Paragraph className={styles.newsText}>{news.text}</Paragraph>
          </article>
        </>
      )}
    </WrapperForMainContent>
  )
}

export default NewsItemPage
