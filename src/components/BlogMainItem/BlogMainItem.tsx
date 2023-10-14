import React from 'react'
import styles from './blog-main-item.module.scss'
import { blogMainItemData } from '../../mockData/blogMainItemData'
import { useMemo } from 'react'

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
  console.log(tags)
  return (
    <a className={styles.main}>
      <img src={mainItem.src} alt={mainItem.alt} draggable="false" />
      <div className={styles.main__tags}>{tags}</div>
      <h3>{mainItem.title || ''}</h3>
      <span>{mainItem.date || ''}</span>
    </a>
  )
}

export default BlogMainItem
