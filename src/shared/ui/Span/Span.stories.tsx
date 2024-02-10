import type { Meta, StoryObj } from '@storybook/react'

import Span from './Span'

const meta = {
  title: 'shared/Span',
  component: Span,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Span>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '*'
  }
}
