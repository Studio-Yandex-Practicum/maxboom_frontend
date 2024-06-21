import { FC, useMemo } from 'react'

import { TBlogItem } from '@/models/BlogItemModel'
import { Button } from '@/shared/ui/Button/Button'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Scroll from '@/shared/ui/Scroll/Scroll'

import styles from './blog-categories.module.scss'

interface IBlogCategories {
  cards: TBlogItem[]
  filterItems: (curcat?: string) => void
}

/**
 * Компонент BlogCategories используется в компоненте SideBarBlog, делает фильтрацию по категориям
 * @param {Array} cards - массив карточек блога
 * @param {function} filterItems - функция фильтровки категорий
 */

const BlogCategories: FC<IBlogCategories> = ({ cards, filterItems }) => {
  const currentCategory = useMemo(
    () =>
      cards.map(item => {
        return item.category
      }),
    [cards]
  )

  const result: {
    key?: string
    count: number
  }[] = []
  // Create a unique list of items to loop over
  // Add each item to the result list
  ;[...new Set(currentCategory)].forEach(item =>
    useMemo(
      () =>
        result.push({
          key: item,
          // Get the count of items of the current type
          count: currentCategory.filter(i => i == item).length
        }),
      [result]
    )
  )

  const Categories = useMemo(
    () =>
      result.map(item => {
        return (
          <li key={item.key}>
            <Button
              className={styles.blogCategories__button}
              onClick={() => {
                filterItems(item.key)
              }}>
              <span>{item.key}</span>
              <span>{item.count}</span>
            </Button>
          </li>
        )
      }),
    [currentCategory]
  )

  return (
    <div className={styles.blogCategories}>
      <Heading type={HeadingType.NORMAL} className={styles.blogCategories__title}>
        Категории
      </Heading>
      <Scroll withManualGrip={true} className={styles.blogCategories__list}>
        {Categories}
      </Scroll>
    </div>
  )
}

export default BlogCategories
