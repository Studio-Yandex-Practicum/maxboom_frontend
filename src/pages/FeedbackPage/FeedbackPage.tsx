import WrapperForMainContent from '@/components/WrapperForMainContent/WrapperForMainContent'
import ReviewsBlock from '@/widgets/ReviewsBlock/ui/ReviewsBlock/ReviewsBlock'

/**
 * Страница отзывов о сайте.
 * @
 */
export const FeedbackPage = () => {
  return (
    <WrapperForMainContent>
      <ReviewsBlock title="Отзывы о магазине" />
    </WrapperForMainContent>
  )
}
