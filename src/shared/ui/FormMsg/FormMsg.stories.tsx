import type { Meta, StoryObj } from '@storybook/react'

import { FormMsg } from './FormMsg'

const meta = {
  title: 'shared/FormMsg',
  component: FormMsg,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof FormMsg>

export default meta
type Story = StoryObj<typeof meta>

export const Succeed: Story = {
  args: {
    text: 'Данные успешно отправлены!',
    isError: false,
    disableClose: false,
    closeHandel: () => {
      alert('Выполненяются действия из переданной функции')
    }
  }
}

export const Error: Story = {
  args: {
    text: 'Ошибка отправки данных на сервер!',
    isError: true,
    disableClose: false,
    closeHandel: () => {
      alert('Выполненяются действия из переданной функции')
    }
  }
}

export const ErrorWithoutCloseBtn: Story = {
  args: { text: 'Ошибка валидации полей формы', isError: true, disableClose: true }
}
