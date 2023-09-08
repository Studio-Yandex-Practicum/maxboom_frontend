import React from 'react'
import styles from './stories.module.scss'
import { storiesData } from '../../mockData/storiesData'
import CardStories from '../card-for-container/card-for-container'

const Stories = () => {
  return (
    <div className={styles.wrapper}>
      <ul>{storiesData ? storiesData.map(item => <CardStories key={item.id} card={item} />) : null}</ul>
    </div>
  )
}

export default Stories
