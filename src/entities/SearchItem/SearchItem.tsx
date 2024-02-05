import { type FC, useMemo, useState } from 'react'

import ArrowRightIcon from '@/assets/images/searchItem/arrow-right.svg'
import { TProduct } from '@/shared/model/types/common'
import Link, { TLinkProps } from '@/shared/ui/Link/Link'

import styles from './SearchItem.module.scss'

/**
 * Компонент элемента из поисковой выдачи для тултипа-подсказки
 */
const SearchItem: FC<TProduct & TLinkProps> = props => {
  const { image, name, number, price, ...otherProps } = props
  const [isVisible, setVisibility] = useState(false)

  const handleMouseEnter = () => {
    setVisibility(true)
  }

  const handleMouseLeave = () => {
    setVisibility(false)
  }

  const arrowNode = useMemo(() => <ArrowRightIcon className={styles['image-link']} />, [])

  return (
    <Link
      className={styles.link}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...otherProps}>
      <img src={image} alt="product" className={styles.image} />
      <div className={styles.wrapper}>
        <p className={styles.paragraph}>{name}</p>
        <span className={styles.number}>{number}</span>
      </div>
      <div className={styles['price-wrapper']}>
        <p className={styles.price}>{price}</p>
        {isVisible && arrowNode}
      </div>
    </Link>
  )
}

export default SearchItem
