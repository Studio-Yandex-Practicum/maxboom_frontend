import type { Meta, StoryObj } from '@storybook/react'

import SideBarBlog from './SideBarBlog'

const meta = {
  title: 'widgets/SideBarBlog',
  component: SideBarBlog,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SideBarBlog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return (
    <div style={{ width: '340px' }}>
      <SideBarBlog />
    </div>
  )
}

Default.args = {}
