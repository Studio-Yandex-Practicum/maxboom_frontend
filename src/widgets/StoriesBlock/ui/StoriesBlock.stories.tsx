import { FC } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import styles from './StoriesBlock.module.scss'
import StoriesBlock from './StoriesBlock'

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
