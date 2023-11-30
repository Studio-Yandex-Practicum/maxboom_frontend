import type { Meta, StoryObj } from '@storybook/react'
import Paragraph, { ParagraphTheme } from './Paragraph'

const meta = {
  title: 'Paragraph',
  component: Paragraph,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Paragraph>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    children:
      'На естественном языке сказать об одном и том же факте можно бесконечным числом способов. Можно переставлять слова местами, заменять их на синонимы, склонять по падежам (если говорим о языке с падежами) и тд.'
  }
}

export const ErrorTheme: Story = {
  args: {
    children: 'Произошла ошибка!',
    theme: ParagraphTheme.ERROR
  }
}
