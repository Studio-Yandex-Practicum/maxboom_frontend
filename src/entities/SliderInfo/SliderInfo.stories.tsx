import type { Meta, StoryObj } from '@storybook/react'

// import Img1 from '@/assets/images/stories/img-stories-01.png'

import SliderInfo from './SliderInfo'

const meta = {
  title: 'entities/SliderInfo',
  component: SliderInfo,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SliderInfo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
