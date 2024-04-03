import { StoryObj, Meta } from '@storybook/react'

import { FeedbackForm } from './FeedbackForm'

const meta = {
  title: 'widgets/FeedbackForm',
  component: FeedbackForm,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FeedbackForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}
