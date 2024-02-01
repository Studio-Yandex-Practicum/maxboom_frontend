import styles from './blog-categories.module.scss'
import { FC, useMemo } from 'react'
import type { PropsCategories } from '@/models/PropsBlog'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Paragraph from '@/shared/ui/Paragraph/Paragraph'
import { TBlogItem } from '@/models/BlogItemModel'

const BlogCategories: FC<PropsCategories> = props => {
  const { cards } = props

  const cat = useMemo(
    () =>
      cards.map(item => {
        return item.category
      }),
    [cards]
  )

  const result: {
    key: string
    count: number
  }[] = []
  // Create a unique list of items to loop over
  // Add each item to the result list
  ;[...new Set(cat)].forEach(item =>
    useMemo(
      () =>
        result.push({
          key: item,
          // Get the count of items of the current type
          count: cat.filter(i => i == item).length
        }),
      [result]
    )
  )

  const uniqueCats = useMemo(
    () =>
      result.map(item => {
        return (
          <button
            key={item.key}
            className={styles.cats__item}
            onClick={() => {
              filterCategories(item.key, cards)
            }}>
            {item.key}
            <Paragraph className={styles.cats__count}>{item.count}</Paragraph>
          </button>
        )
      }),
    [[...new Set(cat)]]
  )

  const filterCategories = (curcat: string, cards: TBlogItem[]) => {
    const newItems = cards.filter(newVal => {
      return newVal.category === curcat
      // comparing category for displaying data
    })
    return newItems
  }

  return (
    <div className={styles.cats}>
      <section className={styles.cats__container}>
        <Heading type={HeadingType.NORMAL}>Категории</Heading>
        <ul className={styles.cats__items}>{uniqueCats}</ul>
      </section>
    </div>
  )
}

export default BlogCategories
