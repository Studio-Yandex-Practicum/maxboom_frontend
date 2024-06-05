import type { Meta, StoryObj } from '@storybook/react'

import OverviewBlock from './OverviewBlock'

const meta = {
  title: 'widgets/OverviewBlock',
  component: OverviewBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof OverviewBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '700px' }}>
      <OverviewBlock />
    </div>
  )
}

Default.args = {}
