import React from 'react'
import styles from './blog-main-item.module.scss'
import { blogMainItemData } from '../../mockData/blogMainItemData'
import { useEffect, useMemo } from 'react'
import { fromSS } from '../../constants/constants'
import IconComment from '../../assets/images/blogMainItem/icon-comments.svg'
import IconEye from '../../assets/images/blogMainItem/icon-views.svg'
import IconDot from '../../assets/images/blogMainItem/icon-dot.svg'
import classNames from 'classnames'

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
        <p className={styles.main__icon}>
          <IconEye className={classNames(styles.main__image)} /> {fromSS}
        </p>
        <p className={styles.main__icon}>
          <IconComment className={classNames(styles.main__image)} />
          {mainItem.comments.length}
        </p>
        <IconDot className={classNames(styles.main__icon)} />
        <span>{mainItem.date || ''}</span>
      </div>
    </a>
  )
}

export default BlogMainItem
