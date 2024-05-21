import type { Meta, StoryObj } from '@storybook/react'

import BrandBlock from './BrandBlock'

const meta = {
  title: 'widgets/BrandBlock',
  component: BrandBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BrandBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '1400px' }}>
      <BrandBlock />
    </div>
  )
}

Default.args = {}
