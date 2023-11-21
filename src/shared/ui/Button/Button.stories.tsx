import type { Meta, StoryObj } from '@storybook/react'
import ChatIcon from '../../../assets/icons/chat.svg'
import { Button, ButtonDesign, ButtonSize, ButtonTheme } from './Button'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Text'
  }
}
export const Primary: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PRIMARY
  }
}
export const PrimaryBig: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.L
  }
}
export const PrimarySmall: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PRIMARY,
    size: ButtonSize.S
  }
}
export const PrimaryDisabled: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.PRIMARY,
    disabled: true
  }
}
export const PrimaryRound: Story = {
  args: {
    children: (
      <ChatIcon
        style={{
          transform: 'translateY(1px)'
        }}
      />
    ),
    theme: ButtonTheme.PRIMARY,
    design: ButtonDesign.ROUND
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}

export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.SECONDARY
  }
}
