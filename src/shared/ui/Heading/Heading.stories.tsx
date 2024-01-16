import type { Meta, StoryObj } from '@storybook/react'

import Heading, { HeadingType } from './Heading'

const meta = {
  title: 'shared/Heading',
  component: Heading,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Main: Story = {
  args: {
    children: 'Информация о доставке',
    type: HeadingType.MAIN
  }
}

export const Medium: Story = {
  args: {
    children: 'Информация о доставке',
    type: HeadingType.MEDIUM
  }
}

export const Normal: Story = {
  args: {
    children: 'Информация о доставке',
    type: HeadingType.NORMAL
  }
}
export const Small: Story = {
  args: {
    children: 'Информация о доставке',
    type: HeadingType.SMALL
  }
}
