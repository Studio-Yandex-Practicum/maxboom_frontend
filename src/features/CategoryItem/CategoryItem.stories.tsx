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
    item: {
      id: 3434,
      name: 'Тестовая категория',
      slug: '/test',
      total_count: 1,
      branches: [
        {
          id: 3,
          name: 'Тестовая подкатегория',
          slug: '/test',
          products_count: 5,
          branches: []
        }
      ],
      root: false,
      is_prohibited: false,
      is_visible_on_main: false
    }
  }
}
