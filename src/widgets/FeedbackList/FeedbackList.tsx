import { useEffect, useRef, type FC } from 'react'
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso'

import { FeedbackCard } from '@/entities/FeedbackCard/FeedbackCard'
import { Nullable } from '@/shared/model/types/common'

import styles from './FeedbackList.module.scss'
import type { IFeedback } from './model/types/types'

interface IFeedbackListProps {
  targetId: number
  feedbacks: IFeedback[]
  isLoading: boolean
  nextPage: Nullable<number>
  fetchNextPage: VoidFunction
}

/**
 * Виджет дял отображения отзывов
 * @param {IFeedback[]} feedbacks- массив отзывов о магазине
 * @param {number} ptargetId - идентификатор отзыва, на который нужно спозиционировать страницу
 * @param {boolean} isLoading - флаг выполнения запроса с Backend
 * @param {number} nextPage - номер следующей страницы для запорса с пагинацией
 * @param {VoidFunction} fetchNextPage - функция для выполнеия запроса следующей страницы
 */
export const FeedbackList: FC<IFeedbackListProps> = ({
  feedbacks,
  targetId,
  isLoading,
  nextPage,
  fetchNextPage
}) => {
  const virtuosoRef = useRef<VirtuosoHandle>(null)

  useEffect(() => {
    if (virtuosoRef && virtuosoRef.current) {
      virtuosoRef.current.scrollToIndex({ index: targetId, behavior: 'smooth' })
    }
  }, [targetId])

  return (
    <section className={styles.feedbacklist}>
      <Virtuoso
        ref={virtuosoRef}
        useWindowScroll
        totalCount={15}
        initialTopMostItemIndex={targetId}
        data={feedbacks}
        components={{
          Footer: () => isLoading && <p className={styles.list__preloader}>Загрузка ...</p>
        }}
        itemContent={(_, item) => {
          return <FeedbackCard feedback={item} key={item.pk} />
        }}
        endReached={() => {
          if (nextPage) {
            fetchNextPage()
          }
        }}
      />
    </section>
  )
}
