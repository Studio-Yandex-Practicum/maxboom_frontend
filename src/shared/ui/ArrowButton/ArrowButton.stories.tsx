import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import ArrowButton from './ArrowButton'
import styles from './ArrowButton.module.scss'

const StorybookWrapper: FC = () => {
  return (
    <div className={styles.storybook}>
      <ArrowButton type="left" />
    </div>
  )
}

const meta = {
  title: 'shared/ArrowButton',
  component: StorybookWrapper,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
    type: 'right',
    className: styles.storybook
  }
}
