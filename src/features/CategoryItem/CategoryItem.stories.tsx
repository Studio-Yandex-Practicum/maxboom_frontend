import { Meta, StoryObj } from '@storybook/react'

import { CategoryItem } from '@/features/CategoryItem/CategoryItem'

const meta = {
  title: 'features/CategoryItem',
  component: CategoryItem,
  tags: ['autodocs']
} satisfies Meta<typeof CategoryItem>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    name: 'Тестовое имя категории',
    slug: '/test',
    count: 999,
    id: 999
  }
}
