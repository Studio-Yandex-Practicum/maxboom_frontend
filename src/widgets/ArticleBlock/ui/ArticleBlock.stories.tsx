import type { Meta, StoryObj } from '@storybook/react'

import ArticleBlock from './ArticleBlock'

const meta = {
  title: 'widgets/ArticleBlock',
  component: ArticleBlock,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ArticleBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = () => {
  return <ArticleBlock />
}

Default.args = {}
