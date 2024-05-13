import { Meta, StoryObj } from '@storybook/react'
import { type FC } from 'react'

import { CategoryItemSkeleton } from '@/features/CategoryItem/CategoryItemSkeleton/CategoryItemSkeleton'

const StorybookWrapper: FC = () => {
  return (
    <div>
      <CategoryItemSkeleton />
    </div>
  )
}

const meta = {
  title: 'features/CategoryItemSkeleton',
  component: StorybookWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
