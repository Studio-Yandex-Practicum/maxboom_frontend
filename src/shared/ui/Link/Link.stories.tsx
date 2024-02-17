import { Meta, Story } from '@storybook/react'

import Svg from '@/assets/icons/IconEye.svg'

import Link from './Link'

const meta: Meta = {
  title: 'shared/Link',
  component: Link,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type StoryProps = React.ComponentProps<typeof Link>
type LinkStory = Story<StoryProps>

export const Default: LinkStory = args => <Link {...args}>Default Link</Link>
Default.args = {}

export const CustomClassName: LinkStory = args => (
  <Link {...args} className="custom-link">
    Custom Class Name Link
  </Link>
)
CustomClassName.args = {}

export const WithIcon: LinkStory = args => (
  <Link {...args}>
    With Icon
    <span role="img" aria-label="icon">
      &#128515;
    </span>
  </Link>
)
WithIcon.args = {}

export const ExternalLink: LinkStory = args => (
  <Link {...args} to="https://www.google.com" target="_blank" rel="noopener noreferrer">
    External Link
    <span role="img" aria-label="external">
      &#128279;
    </span>
  </Link>
)
ExternalLink.args = {}

export const WithSvg: LinkStory = args => (
  <Link {...args} className="styled-link">
    <Svg />
  </Link>
)
WithSvg.args = {}
