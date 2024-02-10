import { Meta, Story } from '@storybook/react'

import NavigationLink, { NavigationLinkProps } from './NavigationLink'

export default {
  title: 'widgets/NavigationLink',
  component: NavigationLink
} as Meta

const Template: Story<NavigationLinkProps> = args => <NavigationLink {...args} />

export const Default = Template.bind({})
Default.args = {
  label: 'Home',
  to: '/'
}

export const About = Template.bind({})
About.args = {
  label: 'About',
  to: '/about'
}

export const Contact = Template.bind({})
Contact.args = {
  label: 'Contact',
  to: '/contact'
}
