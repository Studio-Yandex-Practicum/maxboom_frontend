import img1 from '@/assets/images/banner/banner.png'
import img2 from '@/assets/images/banner/banner_small.png'
import { TBannerCard } from '@/entities/BannerCard/BannerCard'
import { Routes } from '@/shared/config/routerConfig/routes'

export const bannerData: TBannerCard[] = [
  {
    id: 100,
    urlImg: img1,
    urlImg_m: img2,
    alt: 'Mobil',
    title: 'DJI OSMO',
    subtitle: 'Mobile 4',
    href: Routes.ABOUT // роут приведен только для примера
  },
  {
    id: 101,
    urlImg: img1,
    urlImg_m: img2,
    alt: 'Mobil',
    title: 'DJI OSMO',
    subtitle: 'Mobile 4',
    href: Routes.BLOG // роут приведен только для примера
  },
  {
    id: 102,
    urlImg: img1,
    urlImg_m: img2,
    alt: 'Mobil',
    title: 'DJI OSMO',
    subtitle: 'Mobile 4',
    href: Routes.CART // роут приведен только для примера
  }
]
