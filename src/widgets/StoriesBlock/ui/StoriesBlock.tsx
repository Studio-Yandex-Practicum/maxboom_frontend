import { FC, useEffect } from 'react'
import { getStories } from '../model/services/getStories'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import { getStoriesSelector } from '../model/selectors/selectors'
import { useSelector } from 'react-redux'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import styles from './StoriesBlock.module.scss'
import Scroll from '@/shared/ui/Scroll/Scroll'
import StoryCard from '@/entities/StoryCard/StoryCard'

/**
 * Блок группы историй
 */
const StoriesBlock: FC = () => {
  const dispatch = useAppDispatch()
  const stories = useSelector(getStoriesSelector)

  useEffect(() => {
    dispatch(getStories())
  }, [])

  return (
    <section className={styles.wrapper}>
      <article>
        <Heading type={HeadingType.NORMAL}>Истории</Heading>
      </article>
      <Scroll>
        {stories.map(item => (
          <StoryCard key={item.id} link={item.link} pictures={item.pictures.map(item => item.image)} />
        ))}
      </Scroll>
    </section>
  )
}

export default StoriesBlock
