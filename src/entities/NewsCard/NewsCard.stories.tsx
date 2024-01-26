import type { Meta, StoryObj } from '@storybook/react'
import NewsCard from './NewsCard'
import Img1 from '@/assets/images/news/img-news-01.png'

const meta = {
  title: 'entities/NewsCard',
  component: NewsCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof NewsCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    card: {
      id: 1,
      src: Img1,
      alt: 'Покупай и не жди. До -50% на весь электротранспорт!',
      title: 'Покупай и не жди. До -50% на весь электротранспорт!',
      date: '15 Мая, 2022',
      promo: true
    }
  }
}
