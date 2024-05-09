import type { Meta, StoryObj } from '@storybook/react'

import { FeedbackList } from './FeedbackList'

const meta = {
  title: 'widgets/FeedbackList',
  component: FeedbackList,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FeedbackList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    feedbacks: [
      {
        pk: 6,
        text: 'Хороший магазин',
        pub_date: '2024-01-22T09:42:35.242681+03:00',
        author_name: 'string',
        author_email: 'user@example.com',
        average_score: 5.0,
        delivery_speed_score: 5,
        quality_score: 5,
        price_score: 5,
        replay: null
      },
      {
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
      },
      {
        pk: 4,
        text: 'Нет ПС5, зато есть геймпад. Это определённо лучшее вложение в будущее. За 5 месяцев он не начал скрипеть, не появились какие-либо проблемы с кнопками, стиками, к моему ноутбуку и другим устройствам подключается стабильно. Для использования полного функционала советую программу DS4Windows.',
        pub_date: '2024-01-22T09:33:04.988581+03:00',
        author_name: 'Lusya',
        author_email: 'lusya@gmail.com',
        average_score: 3.3,
        delivery_speed_score: 5,
        quality_score: 2,
        price_score: 3,
        replay: null
      },
      {
        pk: 3,
        text: 'Мы очень ним гордимся, это результат упорного труда в течении длительного времени и сейчас наша команда ежедневно работает над улучшением сервиса.',
        pub_date: '2024-01-22T09:32:03.920616+03:00',
        author_name: 'Дима',
        author_email: 'dima@gmail.com',
        average_score: 4.0,
        delivery_speed_score: 3,
        quality_score: 4,
        price_score: 5,
        replay: null
      }
    ],
    targetId: 0,
    isLoading: false,
    nextPage: null
  }
}
