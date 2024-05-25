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

import styles from './StoriesBlock.module.scss'

/**
 * Компонент StoriesBlock - это блок группы историй. Отрисовывается на главной странице MainPage
 */

const StoriesBlock: FC = () => {
  const dispatch = useAppDispatch()
  const stories: IStoriesData[] = useSelector(getStoriesSelector)

  useEffect(() => {
    dispatch(getStories())
  }, [])

  return (
    stories.length != 0 && (
      <section className={styles.storiesBlock}>
        <HeadingBlock title={TEXT_STORIES} />

        <Scroll className={styles.storiesScroll}>
          {stories.map(item => (
            <li key={item.id}>
              <StoryCard link={item.link} pictures={item.pictures.map(item => item.image)} />
            </li>
          ))}
        </Scroll>
      </section>
    )
  )
}

export default StoriesBlock
