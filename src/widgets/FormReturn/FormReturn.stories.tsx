/* eslint-disable */
import type { Meta, StoryObj } from '@storybook/react'
import FormReturn from './FormReturn'

const meta = {
  title: 'widgets/FormReturn',
  component: FormReturn,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FormReturn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
