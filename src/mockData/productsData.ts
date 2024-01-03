import image1 from '@/assets/images/product/2-500x500.webp'

export type TProduct = {
  src: string
  name: string
  article: string // Unique identifier
  price: number
  currency: string
}

export const productsData: TProduct[] = [
  {
    src: image1,
    name: 'Автомобильный переходник fjhfjbfffffffffffffffffffhj hfjhsdddddddddddd hfkjhsdfkhs jhdfkjhsd kfhs dfkjsh jdsfhsdfh hdfhsd1',
    article: '1229239191', // Unique identifier
    price: 781,
    currency: '₽'
  },
  {
    src: image1,
    name: 'Автомобильный переходник 2',
    article: '1229239192',
    price: 782,
    currency: '₽'
  },
  {
    src: image1,
    name: 'Автомобильный переходник 3',
    article: '1229239193',
    price: 783,
    currency: '₽'
  }
]
