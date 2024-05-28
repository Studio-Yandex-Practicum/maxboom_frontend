import img1 from '@/assets/images/advantages/img1.png'
import img2 from '@/assets/images/advantages/img2.png'
import img3 from '@/assets/images/advantages/img3.png'
import img4 from '@/assets/images/advantages/img4.png'
import img5 from '@/assets/images/advantages/img5.png'
import img6 from '@/assets/images/advantages/img6.png'
import { Routes } from '@/shared/config/routerConfig/routes'

export const advantagesData = [
  {
    image: img1,
    name: 'Бесплатная доставка',
    alt: 'изображение',
    route: Routes.DELIVERY
  },
  {
    image: img2,
    alt: 'изображение',
    name: 'Бонусы за покупку',
    route: Routes.ADD_RETURN
  },
  {
    image: img3,
    alt: 'изображение',
    name: 'Гарантированный возврат и обмен',
    route: Routes.BLOG
  },
  {
    image: img4,
    alt: 'изображение',
    name: 'Сертификаты на все товары',
    route: Routes.BRANDS
  },
  {
    image: img5,
    alt: 'изображение',
    name: 'Сертификаты на все товары',
    route: Routes.HOME
  },
  {
    image: img6,
    alt: 'изображение',
    name: 'Гарантийное обслуживание',
    route: Routes.HOME
  }
]
