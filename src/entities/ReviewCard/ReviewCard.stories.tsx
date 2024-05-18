import type { Meta, StoryObj } from '@storybook/react'

import { ReviewCard } from './ReviewCard'

const meta = {
  title: 'entities/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ReviewCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    pk: 1,
    name: 'Рейтинг нашего магазина',
    score: 4.3,
    text: 'Мы очень ним гордимся, это результат упорного труда в течении длительного времени и сейчас наша команда ежедневно работает над улучшением сервиса.',
    date: '2024-01-22T09:42:35.242681+03:00',
    index: 0
  }
}
