import type { Meta, StoryObj } from '@storybook/react'

import { brandsData } from '@/mockData/brandData'

import BrandBlock from './BrandBlock'

const meta = {
  title: 'widgets/BrandBlock',
  component: BrandBlock,
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof BrandBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    card: brandsData
  }
}
