import { FC } from 'react'

import StoryCard from '@/entities/StoryCard/StoryCard'
import { storiesData } from '@/mockData/storiesData'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Scroll from '@/shared/ui/Scroll/Scroll'

import styles from './StoriesBlock.module.scss'

/**
 * Блок группы историй
 */
const StoriesBlock: FC = () => {
  return (
    <section className={styles.wrapper}>
      <article>
        <Heading type={HeadingType.NORMAL}>Истории</Heading>
      </article>
      <Scroll>
        {storiesData.map(item => (
          <StoryCard key={item.id} card={item} />
        ))}
      </Scroll>
    </section>
  )
}

export default StoriesBlock
