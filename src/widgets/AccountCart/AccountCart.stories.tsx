import type { Meta, StoryObj } from '@storybook/react'

import { AccountCart } from './AccountCart'

const meta = {
  title: 'widgets/AccountCart',
  component: AccountCart,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof AccountCart>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '700px', padding: '20px', backgroundColor: 'grey' }}>
      <AccountCart />
    </div>
  )
}

Default.args = {}
