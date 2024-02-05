import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import StoriesBlock from './StoriesBlock'
import styles from './StoriesBlock.module.scss'

const StorybookWrapper: FC = () => {
  return (
    <div className={styles.storybook}>
      <StoriesBlock />
    </div>
  )
}

const meta = {
  title: 'widgets/StoriesBlock',
  component: StorybookWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
