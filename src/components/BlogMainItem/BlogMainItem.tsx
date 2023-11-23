import styles from './blog-main-item.module.scss'
import { blogMainItemData } from '@/mockData/blogMainItemData'
import { useEffect, useMemo } from 'react'
import ViewIcon from '@/assets/images/blogMainItem/icon-views.svg'
import CommentIcon from '@/assets/images/blogMainItem/icon-comments.svg'
import DotIcon from '@/assets/images/blogMainItem/icon-dot.svg'
import { fromSS } from '@/constants/constants'

function BlogMainItem() {
  const mainItem = blogMainItemData
  const tags = useMemo(
    () =>
      blogMainItemData.tags.map(item => {
        return (
          <p className={styles.main__tag} key={item}>
            {item}
          </p>
        )
      }),
    []
  )

  useEffect(() => {
    const fromSS = sessionStorage.getItem('homeview')
    if (!fromSS) {
      const timer = setTimeout(() => {
        sessionStorage.setItem('homeview', '1')
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <a className={styles.main}>
      <img src={mainItem.src} alt={mainItem.alt} draggable="false" />
      <div className={styles.main__tags}>{tags}</div>
      <h3>{mainItem.title || ''}</h3>
      <div className={styles.main__info}>
        <p className={styles.main__icons}>
          <ViewIcon className={styles['main__icon']} /> {fromSS}
        </p>
        <p className={styles.main__icons}>
          <CommentIcon className={styles['main__icon']} /> {mainItem.comments.length}
        </p>
        <p className={styles.main__icons}>
          <DotIcon className={styles['main__icon']} />
          <span>{mainItem.date || ''}</span>
        </p>
      </div>
    </a>
  )
}

export default BlogMainItem
