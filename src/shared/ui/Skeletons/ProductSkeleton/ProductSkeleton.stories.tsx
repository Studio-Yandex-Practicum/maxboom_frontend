import { Meta, StoryObj } from '@storybook/react'
import { type FC } from 'react'

import { ProductSkeleton } from '@/shared/ui/Skeletons/ProductSkeleton/ProductSkeleton'

const StorybookWrapper: FC = () => {
  return (
    <div>
      <ProductSkeleton />
    </div>
  )
}

const meta = {
  title: 'shared/ProductSkeleton',
  component: StorybookWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
