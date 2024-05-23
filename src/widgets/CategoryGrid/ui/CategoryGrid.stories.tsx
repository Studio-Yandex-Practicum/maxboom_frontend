import type { Meta, StoryObj } from '@storybook/react'

import CategoryGrid from './CategoryGrid'

const meta = {
  title: 'widgets/CategoryGrid',
  component: CategoryGrid,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CategoryGrid>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '1400px' }}>
      <CategoryGrid />
    </div>
  )
}

Default.args = {}
