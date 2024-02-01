import { FC, useMemo } from 'react'
import styles from './blog-tags.module.scss'
import type { PropsTags } from '@/models/PropsBlog'
import { TBlogItem } from '@/models/BlogItemModel'

const BlogTags: FC<PropsTags> = props => {
  const { cards } = props
  /*const [items, setItems] = useState();*/

  const filterTags = (curcat: string, cards: TBlogItem[]) => {
    const newItems = cards.filter(newVal => {
      return newVal.tags.includes(curcat)
      // comparing category for displaying data
    })
    console.log(newItems)
    return newItems
  }

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
          <button
            key={item}
            className={styles.tags__item}
            onClick={() => {
              filterTags(item, cards)
            }}>
            {item}
          </button>
        )
      }),
    arrayOfTags
  )

  return (
    <div className={styles.tags}>
      <section className={styles.tags__container}>
        <p className={styles.tags__title}>Тэги</p>
        <ul className={styles.tags__items}>{uniqueTags}</ul>
      </section>
    </div>
  )
}

export default BlogTags
