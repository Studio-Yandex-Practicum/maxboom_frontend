import type { Meta, StoryObj } from '@storybook/react'

import Advantages from './Advantages'

const meta = {
  title: 'widgets/Advantages',
  component: Advantages,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Advantages>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '1470px' }}>
      <Advantages />
    </div>
  )
}

Default.args = {}
