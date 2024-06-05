import type { Meta, StoryObj } from '@storybook/react'

import { LastOrder } from './LastOrder'

const meta = {
  title: 'widgets/LastOrder',
  component: LastOrder,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof LastOrder>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '700px', padding: '20px', backgroundColor: 'grey' }}>
      <LastOrder />
    </div>
  )
}

Default.args = {}
