import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import StoryCard from '@/entities/StoryCard/StoryCard'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Heading, { HeadingType } from '@/shared/ui/Heading/Heading'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { getStoriesSelector } from '../model/selectors/selectors'
import { getStories } from '../model/services/getStories'
import { IStoriesData } from '../model/types/types'

import styles from './StoriesBlock.module.scss'

/**
 * Блок группы историй
 */
const StoriesBlock: FC = () => {
  const dispatch = useAppDispatch()
  const stories: IStoriesData[] = useSelector(getStoriesSelector)

  useEffect(() => {
    dispatch(getStories())
  }, [])

  return (
    stories.length != 0 && (
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
  )
}

export default StoriesBlock
