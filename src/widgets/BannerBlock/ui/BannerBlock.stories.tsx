import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import BannerBlock from './BannerBlock'
import styles from './BannerBlock.module.scss'

const StorybookWrapper: FC = () => {
  return (
    <div className={styles.storybook}>
      <BannerBlock />
    </div>
  )
}

const meta = {
  title: 'widgets/BannerBlock',
  component: StorybookWrapper,
  parameters: {
    layout: 'centered'
  },

  tags: ['autodocs']
} satisfies Meta<typeof StorybookWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}
