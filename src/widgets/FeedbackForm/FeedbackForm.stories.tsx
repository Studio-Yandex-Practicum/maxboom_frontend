import { StoryObj, Meta } from '@storybook/react'

import { FeedbackForm } from './FeedbackForm'

export default { component: FeedbackForm }

const Metadata = {
  title: 'widgets/FeedbackForm',
  component: FeedbackForm,
  parameters: {}
} as Meta<typeof FeedbackForm>

type Story = StoryObj<typeof Metadata>

export const Default: Story = {
  args: {}
}
