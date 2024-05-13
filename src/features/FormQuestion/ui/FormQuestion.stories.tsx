import type { Meta, StoryObj } from '@storybook/react'

import FormQuestion from './FormQuestion'

const meta = {
  title: 'widgets/FormQuestion',
  component: FormQuestion,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FormQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
