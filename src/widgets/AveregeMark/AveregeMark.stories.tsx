import type { Meta, StoryObj } from '@storybook/react'

import { AveregeMark } from './AveregeMark'

const meta = {
  title: 'widgets/AveregeMark',
  component: AveregeMark,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AveregeMark>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    deliverySpeedScore: 3,
    priceScore: 3.0,
    qualityScore: 3,
    score: 3.0
  }
}
