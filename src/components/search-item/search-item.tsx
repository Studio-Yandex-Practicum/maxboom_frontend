import React, { FC, useMemo, useState } from 'react'
import styles from './search-item.module.scss'
import arrow from '../../images/search-item/arrow-right.svg'
import { TProduct } from '../../utils/types'
import { Link } from 'react-router-dom'

const SearchItem: FC<TProduct> = ({ image, name, number, price }) => {
  const [isVisible, setVisability] = useState(false)
  const handleMouseEnter = () => {
    setVisability(true)
  }

  const handleMouseLeave = () => {
    setVisability(false)
  }

  const arrowNode = useMemo(() => <img src={arrow} alt="arrow-right" className={`${styles['image-link']}`}></img>, [])

  return (
    <Link to="" className={`${styles.link}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={image} alt="magnifier" className={`${styles.image}`}></img>
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
