import { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import { CardPreview } from '@/widgets/ProductItem/CardPreview/CardPreview'

const StorybookWrapper: FC = () => {
  return (
    <div>
      <CardPreview />
    </div>
  )
}

const meta = {
  title: 'widgets/CardPreview',
  component: StorybookWrapper,
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
