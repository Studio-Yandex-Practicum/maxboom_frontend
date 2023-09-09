import React, { FC, useState } from 'react'
import styles from './search-item.module.scss'
import arrow from '../../images/search-item/arrow-right.svg'
import { TProduct } from '../../utils/types'

const SearchItem: FC<TProduct> = props => {
  const [isVisible, setVisability] = useState(false)
  const handleMouseEnter = () => {
    //console.log("мышь над элементом")
    setVisability(true)
  }

  const handleMouseLeave = () => {
    //console.log("мышь покидает элеммент")
    setVisability(false)
  }
  const arrowNode = <img src={arrow} alt="arrow-right" className={`${styles['image-link']}`}></img>

  return (
    <a href="#" className={`${styles.link}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={props.image} alt="magnifier" className={`${styles.image}`}></img>
      <div className={`${styles.wrapper}`}>
        <p className={`${styles.paragraph}`}>{props.name}</p>
        <span className={`${styles.number}`}>{props.number}</span>
      </div>
      <div className={`${styles['price-wrapper']}`}>
        <p className={`${styles.price}`}>{props.price}</p>
        {isVisible && arrowNode}
      </div>
    </a>
  )
}

export default SearchItem
