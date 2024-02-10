import type { Meta, StoryObj } from '@storybook/react'

import Brand1 from '@/assets/images/brands/1-150x150.webp'

import BrandCard from './BrandCard'

const meta = {
  title: 'entities/BrandBlock',
  component: BrandCard,
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof BrandCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    card: {
      id: 1,
      name: 'UGG',
      slug: 'ugg',
      image: Brand1,
      is_prohibited: false,
      is_visible_on_main: true
    }
  }
}
