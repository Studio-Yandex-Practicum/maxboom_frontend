import { Routes } from '@/shared/config/routerConfig/routes'
import { CatalogLinksId } from '@/shared/config/catalogLinks/catalogLinks'

export const catalogListData = [
  {
    name: 'FM-трасмиттреры',
    url: `${Routes.PRODUCTS}${CatalogLinksId.TRANSMIT}`
  },
  {
    name: 'GPS-треккеры',
    url: `${Routes.PRODUCTS}${CatalogLinksId.GPS_TRACK}`
  }
]
