import type { Meta, StoryObj } from '@storybook/react'

import BlogMain from './BlogMain'

const meta = {
  title: 'widgets/BlogMain',
  component: BlogMain,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof BlogMain>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '1100px' }}>
      <BlogMain />
    </div>
  )
}

Default.args = {}
