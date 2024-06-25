import type { Meta, StoryObj } from '@storybook/react'

import blogImage from '@/assets/images/blog/img-blog-01.png'

import BlogCard from './BlogCard'

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

export const Default: Story = () => {
  const id = 1
  const image = blogImage
  const date = '2022-07-8'
  const title = 'Дайджест интересных материалов для мобильного разработчика'
  const tags = [{ name: 'тег-1' }, { name: 'тег-2' }, { name: 'тег-3' }]

  return (
    <div style={{ width: '350px' }}>
      <BlogCard id={id} image={image} date={date} title={title} tags={tags} isBlog={true} />
    </div>
  )
}

Default.args = {
  id: 1,
  image: blogImage,
  date: '2022-07-8',
  title: 'Дайджест интересных материалов для мобильного разработчика',
  tags: [{ name: 'тег-1' }, { name: 'тег-2' }, { name: 'тег-3' }]
}
