import type { Meta, StoryObj } from '@storybook/react'

import { FeedbackCard } from './FeedbackCard'

const meta = {
  title: 'entities/FeedbackCard',
  component: FeedbackCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FeedbackCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    feedback: {
      pk: 5,
      text: 'Все отлично, только в заказе были 3 маркера, которые засохли и не писали . После спирта вроде пишут, но не так , как остальные) Все отлично, только в заказе были 3 маркера, которые засохли и не писали . После спирта вроде пишут, но не так , как остальные)',
      pub_date: '2024-01-22T09:34:00.730333+03:00',
      author_name: 'Алексей Владимирович',
      author_email: 'av@gmail.com',
      average_score: 5.0,
      delivery_speed_score: 5,
      quality_score: 5,
      price_score: 5,
      replay: {
        text: 'Благодарим за отзыв!',
        pub_date: '2024-03-17T17:42:26.577549+03:00',
        name: 'Администратор'
      }
    }
  }
}
