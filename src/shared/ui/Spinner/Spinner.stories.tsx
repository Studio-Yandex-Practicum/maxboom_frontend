import { Story, Meta } from '@storybook/react'
import Spinner from './Spinner'

export default {
  title: 'shared/Spinner',
  component: Spinner
} as Meta

const Template: Story = () => <Spinner />

export const Default = Template.bind({})
Default.args = {}
