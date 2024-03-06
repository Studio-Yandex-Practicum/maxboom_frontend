import { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import { CategoryItem } from '@/features/CategoryItem/CategoryItem'

const StorybookWrapper: FC = () => {
  return (
    <div>
      <CategoryItem />
    </div>
  )
}

const meta = {
  title: 'features/CategoryItem',
  component: StorybookWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
