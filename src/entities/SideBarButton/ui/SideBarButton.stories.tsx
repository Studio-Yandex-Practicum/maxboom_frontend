import type { Meta, StoryObj } from '@storybook/react'

import SideBarButton from './SideBarButton'

const meta = {
  title: 'entities/SideBarButton',
  component: SideBarButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof SideBarButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
