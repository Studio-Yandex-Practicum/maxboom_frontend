import { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import { CategoryList } from '@/widgets/CategoryList/CategoryList'

const StorybookWrapper: FC = () => {
  return (
    <div>
      <CategoryList />
    </div>
  )
}

const meta = {
  title: 'widgets/CategoryList',
  component: StorybookWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
