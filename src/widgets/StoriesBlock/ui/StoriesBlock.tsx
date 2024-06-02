import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'

import HeadingBlock from '@/entities/HeadingBlock'
import StoryCard from '@/entities/StoryCard/StoryCard'
import { TEXT_STORIES } from '@/shared/constants/constants'
import { useAppDispatch } from '@/shared/libs/hooks/store'
import Scroll from '@/shared/ui/Scroll/Scroll'

import { getStoriesSelector } from '../model/selectors/selectors'
import { getStories } from '../model/services/getStories'
import { IStoriesData } from '../model/types/types'
import StoriesBlockSkeleton from '../StoriesBlockSkeleton/StoriesBlockSkeleton'

import styles from './StoriesBlock.module.scss'

/**
 * Компонент StoriesBlock - это блок группы историй. Отрисовывается на главной странице MainPage
 */

const StoriesBlock: FC = () => {
  const dispatch = useAppDispatch()
  const stories: IStoriesData[] = useSelector(getStoriesSelector)
  const isLoading = stories.length === 0

  useEffect(() => {
    dispatch(getStories())
  }, [])

  return (
    <section className={styles.storiesBlock}>
      <HeadingBlock title={TEXT_STORIES} />

      <Scroll withManualGrip={true} className={styles.storiesScroll}>
        {stories.map(item => (
          <li key={item.id}>
            <StoryCard link={item.link} pictures={item.pictures.map(item => item.image)} />
          </li>
        ))}
        {isLoading
          ? Array.from({ length: 5 }).map((_, index) => (
              <li key={index}>
                <StoriesBlockSkeleton />
              </li>
            ))
          : stories.map(item => (
              <li key={item.id}>
                <StoryCard link={item.link} pictures={item.pictures.map(picture => picture.image)} />
              </li>
            ))}
      </Scroll>
    </section>
  )
}

export default StoriesBlock
