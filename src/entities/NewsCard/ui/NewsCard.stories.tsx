import type { Meta, StoryObj } from '@storybook/react'

import NewsCard from './NewsCard'

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
    id: 1,
    image: 'http://gealit.ru/media/news/18.png',
    title: 'Покупай и не жди. До -50% на весь электротранспорт!',
    date: '2022-05-15'
  }
}
