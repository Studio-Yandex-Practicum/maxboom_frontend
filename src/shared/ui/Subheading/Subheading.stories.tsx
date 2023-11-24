import type { Meta, StoryObj } from '@storybook/react'

import Subheading from './Subheading'

const meta = {
  title: 'Subheading',
  component: Subheading,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Subheading>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children: 'Треккеры'
  }
}
