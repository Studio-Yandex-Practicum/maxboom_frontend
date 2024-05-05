import type { Meta, StoryObj } from '@storybook/react'

import HeaderMenuSign from './HeaderMenuSign'

const meta = {
  title: 'entities/HeaderMenuSign',
  component: HeaderMenuSign,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {}
} satisfies Meta<typeof HeaderMenuSign>

export default meta

type Story = StoryObj<typeof HeaderMenuSign>

export const Default: Story = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '30px',
        height: '30px',
        background: '#ccc'
      }}>
      <HeaderMenuSign />
    </div>
  )
}

Default.args = {}
