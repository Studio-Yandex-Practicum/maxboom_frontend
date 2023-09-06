import React from 'react'
import styles from './stories.module.scss'
import { TEXT_STORIES } from '../../utils/constants'
import { storiesData } from '../../mockData/storiesData'
import CardStories from '../card-stories/card-stories'

const Stories = () => {
  return (
    <section className={styles.wrapper}>
      <h2>{TEXT_STORIES}</h2>
      <div className={styles.container}>
        <ul>{storiesData ? storiesData.map(item => <CardStories key={item.id} card={item} />) : null}</ul>
      </div>
    </section>
  )
}

export default Stories
