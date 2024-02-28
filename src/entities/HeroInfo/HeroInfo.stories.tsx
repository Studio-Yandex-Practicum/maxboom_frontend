import type { Meta, StoryObj } from '@storybook/react'

import HeroInfo from './HeroInfo'

const meta = {
  title: 'entities/HeroInfo',
  component: HeroInfo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HeroInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
