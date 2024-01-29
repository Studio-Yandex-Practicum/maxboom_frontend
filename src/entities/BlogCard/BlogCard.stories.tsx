import type { Meta, StoryObj } from '@storybook/react'
import BlogCard from './BlogCard'
import Img1 from '@/assets/images/blog/img-blog-01.png'

const meta = {
  title: 'entities/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BlogCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    card: {
      id: 1,
      src: Img1,
      alt: 'Покупай и не жди. До -50% на весь электротранспорт!',
      title: 'Покупай и не жди. До -50% на весь электротранспорт!',
      date: '8 Мая, 2022'
    }
  }
}
