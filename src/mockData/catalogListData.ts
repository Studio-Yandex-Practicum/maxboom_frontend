import { Routes } from '@/shared/config/routerConfig/routes'
import { CatalogLinksId } from '@/shared/config/catalogLinks/catalogLinks'

export const catalogListData = [
  {
    id: 1,
    name: 'FM-трасмиттреры',
    url: `${Routes.PRODUCTS}${CatalogLinksId.TRANSMIT}`,
    image: require('@/assets/images/categoryCards/img-categories-01-210x263.webp')
  },
  {
    id: 2,
    name: 'GPS-треккеры',
    url: `${Routes.PRODUCTS}${CatalogLinksId.GPS_TRACK}`,
    image: require('@/assets/images/categoryCards/img-categories-02-171x252.webp')
  },
  {
    id: 3,
    name: 'SSD-диски',
    url: `${Routes.PRODUCTS}${CatalogLinksId.SSD}`,
    image: require('@/assets/images/categoryCards/img-categories-03-187x325.webp')
  },
  {
    id: 4,
    name: 'Автозапчасти',
    url: `${Routes.PRODUCTS}${CatalogLinksId.AUTO_PARTS}`,
    image: require('@/assets/images/categoryCards/img-categories-04-180x252.webp')
  },
  {
    id: 5,
    name: 'Зарядные устройства',
    url: `${Routes.PRODUCTS}${CatalogLinksId.CAR_CHARGES}`,
    image: require('@/assets/images/categoryCards/img-categories-05-197x300.webp')
  },
  {
    id: 6,
    name: 'Смартфоны и аксессуары',
    url: `${Routes.PRODUCTS}${CatalogLinksId.SMARTPHONES}`,
    image: require('@/assets/images/categoryCards/img-categories-06-235x325.webp')
  }
]
