import { FC } from 'react'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import styles from './StoriesBlock.module.scss'
import Scroll from '@/shared/ui/Scroll/Scroll'
import { storiesData } from '@/mockData/storiesData'
import StoryCard from '@/entities/StoryCard/StoryCard'

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
