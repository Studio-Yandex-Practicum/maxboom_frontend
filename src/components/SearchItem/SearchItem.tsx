import { FC, useMemo, useState } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import styles from './searchItem.module.scss'
import ArrowRightIcon from '../../assets/images/searchItem/arrow-right.svg'
import { TProduct } from '../../utils/types'

/**
 * @param {string} image - фото товара
 * @param {string} name - название товара
 * @param {number} number - артикул товара
 * @param {string} price - цена товара с валютой
 */
const SearchItem: FC<TProduct & LinkProps> = props => {
  const { image, name, number, price, ...otherProps } = props
  const [isVisible, setVisability] = useState(false)
  const handleMouseEnter = () => {
    setVisability(true)
  }

  const handleMouseLeave = () => {
    setVisability(false)
  }

  const arrowNode = useMemo(() => <ArrowRightIcon className={styles['image-link']} />, [])

  return (
    <Link className={`${styles.link}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} {...otherProps}>
      <img src={image} alt="product" className={`${styles.image}`}></img>
      <div className={`${styles.wrapper}`}>
        <p className={`${styles.paragraph}`}>{name}</p>
        <span className={`${styles.number}`}>{number}</span>
      </div>
      <div className={`${styles['price-wrapper']}`}>
        <p className={`${styles.price}`}>{price}</p>
        {isVisible && arrowNode}
      </div>
    </Link>
  )
}

export default SearchItem
