import { Meta, StoryObj } from '@storybook/react'
import { type FC } from 'react'

import { PageDescriptionSkeleton } from '@/components/PageDescription/PageDescriptionSkeleton/PageDescriptionSkeleton'

const StorybookWrapper: FC = () => {
  return (
    <div>
      <PageDescriptionSkeleton />
    </div>
  )
}

const meta = {
  title: 'shared/PageDescriptionSkeleton',
  component: StorybookWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
