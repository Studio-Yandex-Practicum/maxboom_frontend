import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import BlogBlock from './BlogBlock'
import styles from './BlogBlock.module.scss'

const StorybookWrapper: FC = () => {
  return (
    <div className={styles.storybook}>
      <BlogBlock />
    </div>
  )
}

const meta = {
  title: 'widgets/BlogBlock',
  component: StorybookWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
