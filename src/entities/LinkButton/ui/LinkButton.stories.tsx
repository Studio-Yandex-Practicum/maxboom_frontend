import type { Meta, StoryObj } from '@storybook/react'

import LinkButton from './LinkButton'

const meta = {
  title: 'entities/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof LinkButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  const text = 'Link Button'

  return (
    <div style={{ width: '500px' }}>
      <LinkButton link="#" text={text} />
    </div>
  )
}

Default.args = {
  link: '#',
  text: 'Link Button'
}
