import type { Meta, StoryObj } from '@storybook/react'
import { FC } from 'react'

import Header from './Header'
import styles from './header.module.scss'

const HeaderWrapper: FC = () => {
  return (
    <div className={styles.storybook}>
      <Header />
    </div>
  )
}

const meta = {
  title: 'widgets/Header',
  component: HeaderWrapper,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof HeaderWrapper>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
