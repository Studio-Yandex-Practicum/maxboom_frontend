import { Meta, Story } from '@storybook/react'
import { Textarea, TextareaTheme, TextareaSize } from './Textarea'

const meta: Meta = {
  title: 'shared/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered'
  }
}

export default meta

type StoryProps = React.ComponentProps<typeof Textarea>
type TextareaStory = Story<StoryProps>

export const Default: TextareaStory = args => <Textarea {...args} />
Default.args = {
  placeholder: 'Enter your text',
  rows: 4
}

export const AccentTheme: TextareaStory = args => <Textarea {...args} />
AccentTheme.args = {
  theme: TextareaTheme.ACCENT,
  placeholder: 'Enter your text',
  rows: 4
}

export const LightTheme: TextareaStory = args => <Textarea {...args} />
LightTheme.args = {
  theme: TextareaTheme.LIGHT,
  placeholder: 'Enter your text',
  rows: 4
}

export const DarkTheme: TextareaStory = args => <Textarea {...args} />
DarkTheme.args = {
  theme: TextareaTheme.DARK,
  placeholder: 'Enter your text',
  rows: 4
}

export const MediumSize: TextareaStory = args => <Textarea {...args} />
MediumSize.args = {
  customSize: TextareaSize.M,
  placeholder: 'Enter your text',
  rows: 4
}

export const SmallSize: TextareaStory = args => <Textarea {...args} />
SmallSize.args = {
  customSize: TextareaSize.S,
  placeholder: 'Enter your text',
  rows: 4
}
