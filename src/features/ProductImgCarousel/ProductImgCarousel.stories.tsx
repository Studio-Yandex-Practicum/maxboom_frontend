import { Meta, StoryObj } from '@storybook/react'

import { ProductImgCarousel } from './ProductImgCarousel'

export default { component: ProductImgCarousel }

const Metadata = {
  title: 'features/ProductImgCarousel',
  component: ProductImgCarousel,
  parameters: {
    product: 'данные о товаре'
  }
} as Meta<typeof ProductImgCarousel>

type Story = StoryObj<typeof Metadata>

export const Default: Story = {
  args: {
    imgList: [
      {
        image: 'https://ir.ozone.ru/s3/multimedia-b/wc1000/6661991531.jpg'
      },
      {
        image: 'https://ir.ozone.ru/s3/multimedia-9/wc1000/6661991493.jpg'
      },
      {
        image: 'https://ir.ozone.ru/s3/multimedia-j/wc1000/6661991575.jpg'
      },
      {
        image:
          'https://maxboom.ru/image/cachewebp/catalog/vol862/part86256/86256350/images/big/1-1000x1000.webp'
      },
      {
        image: 'https://ir.ozone.ru/s3/multimedia-y/wc1000/6661991482.jpg'
      },
      {
        image: 'https://ir.ozone.ru/s3/multimedia-v/wc1000/6661991551.jpg'
      },
      {
        image: 'https://ir.ozone.ru/s3/multimedia-1-x/wc1000/6928616361.jpg'
      },
      {
        image: 'https://ir.ozone.ru/s3/multimedia-n/wc1000/6767151887.jpg'
      },
      {
        image: 'https://ir.ozone.ru/s3/multimedia-d/wc1000/6767151877.jpg'
      }
    ],
    setShowPopup: () => {
      alert('Должен всплывать попап')
    }
  }
}
