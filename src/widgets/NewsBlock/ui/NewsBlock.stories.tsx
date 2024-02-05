import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import NewsBlock from './NewsBlock'
import styles from './NewsBlock.module.scss'

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
