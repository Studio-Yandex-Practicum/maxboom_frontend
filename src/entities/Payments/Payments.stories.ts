import type { Meta, StoryObj } from '@storybook/react'

import Payments from './Payments'

const data = {
  footer: {
    additional_logos: [
      {
        image: 'https://maxboom.ru/image/catalog/demo-prostore/svg-icon/icon-payments-visa.svg',
        url: '//visa.ru',
        title: 'visa'
      },
      {
        image: 'https://maxboom.ru/image/catalog/demo-prostore/svg-icon/io.svg',
        url: '//yoomoney.ru',
        title: 'yoomoney'
      }
    ],
    support: {
      name: 'Обрантый звонок',
      phone_number: '+7 977 848-02-28'
    }
  }
}

const meta = {
  title: 'entities/Payments',
  component: Payments,
  parameters: {
    layout: 'centered'
  }
} as Meta<typeof Payments>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: data
  }
}
