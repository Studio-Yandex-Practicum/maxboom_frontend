import { Meta, StoryObj } from '@storybook/react'
import { CardPreview } from '@/widgets/ProductItem/CardPreview/CardPreview'
import { FC } from 'react'

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
