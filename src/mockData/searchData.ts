import img1 from '@/assets/images/searchItem/cream.jpeg'
import { TResultData } from '@/shared/model/types/common'

export const searchResponseData: TResultData = {
  data: [
    {
      id: 1,
      name: 'FM-трасмиттреры',
      slug: '/index.php?route=product/category&path=652',
      type: 'category'
    },
    {
      id: 2,
      name: 'GPS-треккеры',
      slug: '/index.php?route=product/category&path=196',
      type: 'category'
    },
    {
      type: 'product',
      name: 'крем для рук',
      slug: '',
      number: 1234567,
      image: img1,
      price: '738 ₽'
    },
    {
      type: 'product',
      name: 'крем для хвоста',
      slug: '',
      number: 1234567,
      image: img1,
      price: '5734 ₽'
    },
    {
      type: 'product',
      name: 'крем для лица',
      slug: '',
      number: 1234567,
      image: img1,
      price: '333 ₽'
    }
  ],
  success: true
}
