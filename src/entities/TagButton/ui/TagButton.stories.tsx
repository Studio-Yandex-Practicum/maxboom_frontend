import type { Meta, StoryObj } from '@storybook/react'

import TagButton from './TagButton'

const meta = {
  title: 'entities/TagButton',
  component: TagButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof TagButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const tag = 'название тега'

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '350px',
        height: '100px',
        background: '#666',
        borderRadius: '5px'
      }}>
      <TagButton tag={tag} />
    </div>
  )
}

Default.args = {
  tag: 'название тега'
}
