import type { Meta, StoryObj } from '@storybook/react'
import styles from './NewsBlock.module.scss'
import { FC } from 'react'
import NewsBlock from './NewsBlock'

const StorybookWrapper: FC = () => {
  return (
    <div className={styles.storybook}>
      <NewsBlock />
    </div>
  )
}

const meta = {
  title: 'widgets/NewsBlock',
  component: StorybookWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
