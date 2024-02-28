import { Routes } from '@/shared/config/routerConfig/routes'

export const linkItems = [
  { index: 0, label: 'Блог', to: Routes.BLOG },
  { index: 1, label: 'Новости', to: Routes.NEWS },
  { index: 2, label: 'Отзывы о магазине', to: Routes.REVIEWS },
  { index: 3, label: 'Контакты', to: Routes.CONTACTS }
]

export const catalogListData = [
  {
    id: 15,
    name: 'Браслеты',
    slug: 'brasletyi1',
    branches: [],
    root: 'Бижутерия',
    is_prohibited: false,
    is_visible_on_main: true,
    image:
      'http://gealit.ru/media/category-images/brasletyi/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2023-11-29_163851.jpg'
  },
  {
    id: 1,
    name: 'Машинки',
    slug: 'mashinki',
    branches: [],
    root: 'Игрушки',
    is_prohibited: false,
    is_visible_on_main: true,
    image: 'http://gealit.ru/media/category-images/mashinki/170734.jpg'
  },
  {
    id: 22,
    name: 'Медиаплееры',
    slug: 'mediapleeryi1',
    branches: [],
    root: 'Телевизоры и аудиотехника',
    is_prohibited: false,
    is_visible_on_main: true,
    image: null
  }
]
