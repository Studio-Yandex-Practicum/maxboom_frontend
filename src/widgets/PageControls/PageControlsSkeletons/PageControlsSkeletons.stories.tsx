import { Meta, StoryObj } from '@storybook/react'
import { type FC } from 'react'

import { PageControlsSkeletons } from '@/widgets/PageControls/PageControlsSkeletons/PageControlsSkeletons'

const StorybookWrapper: FC = () => {
  return (
    <div>
      <PageControlsSkeletons />
    </div>
  )
}

const meta = {
  title: 'shared/PageControlsSkeletons',
  component: StorybookWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
