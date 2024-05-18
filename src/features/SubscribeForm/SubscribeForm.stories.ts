import type { Meta, StoryObj } from '@storybook/react'

import SubscribeForm from './SubscribeForm'

const meta = {
  title: 'features/SubscribeForm',
  component: SubscribeForm,
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof SubscribeForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'footer',
    onSubmit: () => {
      alert('Действие по сабмиту формы')
    }
  }
}
