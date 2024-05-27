import { Meta, StoryObj } from '@storybook/react'

import CreateAccountForm from './CreateAccountForm'

const meta = {
  title: 'widgets/CreateAccountForm',
  component: CreateAccountForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof CreateAccountForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
