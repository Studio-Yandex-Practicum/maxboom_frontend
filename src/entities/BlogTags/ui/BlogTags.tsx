import { FC, useMemo } from 'react'

import { TBlogItem } from '@/models/BlogItemModel'
import { Button } from '@/shared/ui/Button/Button'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'

import styles from './blog-tags.module.scss'

interface IBlogTags {
  cards: TBlogItem[]
  filterItems: (curcat: string) => void
}

/**
 * Компонент BlogTags используется в компоненте SideBarBlog, делает фильтрацию по тегам
 * @param {Array} cards - массив карточек блога
 * @param {function} filterItems - функция фильтровки тегов
 */

const BlogTags: FC<IBlogTags> = ({ cards, filterItems }) => {
  const tags = useMemo(
    () =>
      cards.map(item => {
        return item.tags
      }),
    [cards]
  )

  const tagsAll = useMemo(
    () =>
      tags.reduce(function (arr, e) {
        return arr.concat(e)
      }),
    [tags]
  )

  const arrayOfTags = Array.from(new Set(tagsAll))

  const uniqueTags = useMemo(
    () =>
      arrayOfTags.map(item => {
        return (
          <li key={item}>
            <Button
              className={styles.blogTags__button}
              onClick={() => {
                filterItems(item)
              }}>
              {item}
            </Button>
          </li>
        )
      }),
    arrayOfTags
  )

  return (
    <div className={styles.blogTags}>
      <Paragraph>Тэги</Paragraph>
      <ul className={styles.blogTags__list}>{uniqueTags}</ul>
    </div>
  )
}

export default BlogTags
