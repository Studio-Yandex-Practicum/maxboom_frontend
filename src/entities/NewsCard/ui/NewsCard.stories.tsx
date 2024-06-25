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

export const Default: Story = () => {
  const image = 'https://gealit.ru/media/news/img-gallery-04-750x500.webp'
  const date = '2022-05-15'
  const title = 'Покупай и не жди. До -50% на весь электротранспорт!'

  return (
    <div style={{ width: '340px' }}>
      <NewsCard id={1} image={image} date={date} title={title} link="#" />
    </div>
  )
}

Default.args = {
  id: 1,
  image: 'http://gealit.ru/media/news/18.png',
  date: '2022-05-15',
  title: 'Покупай и не жди. До -50% на весь электротранспорт!',
  link: '#'
}
