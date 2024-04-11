export const SORT_OPTION = [
  { name: 'Название А-Я', value: 'name' },
  { name: 'Название Я-А', value: '-name' },
  { name: 'Сначала дешевые', value: 'price' },
  { name: 'Сначала дорогие', value: '-price' },
  { name: 'Модель А-Я', value: 'name' },
  { name: 'Модель Я-А', value: '-name' }
]

export const ITEMS_PER_PAGE_OPTION = [
  { name: '15', value: '15' },
  { name: '25', value: '25' },
  { name: '50', value: '50' },
  { name: '75', value: '75' },
  { name: '100', value: '100' }
]

export const TOTAL_PAGES = 10

import image1 from '@/assets/images/product/1-260x260.webp'
import image2 from '@/assets/images/product/1-500x500.webp'
import image3 from '@/assets/images/product/2-500x500.webp'
import image4 from '@/assets/images/product/3-500x500.webp'
import image5 from '@/assets/images/product/4-500x500.webp'
export const PRODUCT_PHOTOS = [image1, image2, image3, image4, image5]
