import { TResultData } from '../utils/types'
import img1 from '../images/search-item/cream.jpeg'

export const searchResponseData: TResultData = {
  data: [
    {
      name: 'FM-трасмиттреры',
      url: '/index.php?route=product/category&path=652',
      type: 'category'
    },
    {
      name: 'GPS-треккеры',
      url: '/index.php?route=product/category&path=196',
      type: 'category'
    },
    {
      type: 'product',
      name: 'крем для рук',
      url: '',
      number: 1234567,
      image: img1,
      price: '738 ₽'
    },
    {
      type: 'product',
      name: 'крем для хвоста',
      url: '',
      number: 1234567,
      image: img1,
      price: '5734 ₽'
    },
    {
      type: 'product',
      name: 'крем для лица',
      url: '',
      number: 1234567,
      image: img1,
      price: '333 ₽'
    }
  ],
  success: true
}
