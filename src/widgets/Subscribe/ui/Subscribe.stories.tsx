import type { Meta, StoryObj } from '@storybook/react'

import Subscribe from './Subscribe'

const meta = {
  title: 'widgets/Subscribe',
  component: Subscribe,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Subscribe>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '1400px' }}>
      <Subscribe />
    </div>
  )
}

Default.args = {}
