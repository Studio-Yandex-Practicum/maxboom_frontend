import { FC, useMemo } from 'react'

import DotIcon from '@/assets/images/blogMainItem/icon-dot.svg'
import BlogItemForContainer from '@/entities/BlogItemForContainer'
import TagButton from '@/entities/TagButton'
import { blogMainItemData } from '@/mockData/blogMainItemData'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Link from '@/shared/ui/Link/Link'
import Subheading from '@/shared/ui/Subheading/Subheading'

import styles from './blog-main-item.module.scss'

const BlogMainItem: FC = () => {
  const tags = useMemo(
    () =>
      blogMainItemData.tags.map((tag, index) => (
        <li key={index}>
          <TagButton tag={tag} />
        </li>
      )),
    []
  )

  return (
    <Link to={''} className={styles.blogMainItem}>
      <img src={blogMainItemData.src} alt={blogMainItemData.alt} className={styles.image} />
      <ul className={styles.blogMainItem__tags}>{tags}</ul>
      <Heading type={HeadingType.NORMAL} className={styles.blogMainItem__title}>
        {blogMainItemData.title}
      </Heading>
      <div className={styles.blogMainItem__infoBox}>
        <BlogItemForContainer views={50} reviews={100} className={styles.blogMainItem__blogItem} />
        <DotIcon className={styles['blogMainItem__icon']} />
        <Subheading className={styles.blogMainItem__subheading}>8 мая, 2022</Subheading>
      </div>
    </Link>
  )
}

export default BlogMainItem
