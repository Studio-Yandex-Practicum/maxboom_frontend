import { FC } from 'react'

import { Button } from '@/shared/ui/Button/Button'

import styles from './TagButton.module.scss'

interface ITagButton {
  tag: string
}
/**
 * Компонент TagButton - это кнопка тега отображается в таких компонентах как BlogCard, BlogTags и других.
 * @param {string} tag - заголовок блога
 */

const TagButton: FC<ITagButton> = ({ tag }) => {
  return <Button className={styles.tagButton}>#{tag}</Button>
}

export default TagButton
