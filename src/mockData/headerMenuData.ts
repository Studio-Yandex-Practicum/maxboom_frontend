import { Routes } from '@/shared/config/routerConfig/routes'

export const headerMenuData = [
  {
    title: 'О нас',
    link: null,
    routes: [
      { subtitle: 'О нас', route: Routes.ABOUT },
      { subtitle: 'Политика безопасности', route: Routes.HOME },
      { subtitle: 'Обзоры', route: Routes.HOME },
      { subtitle: 'Условия соглашения', route: Routes.HOME }
    ]
  },
  {
    title: 'Блог',
    link: Routes.BLOG
  },
  {
    title: 'Новости',
    link: Routes.SHOP_NEWS
  },
  {
    title: 'Отзывы о магазине',
    link: Routes.FEEDBACKS
  },
  {
    title: 'Контакты',
    link: Routes.CONTACTS
  },
  {
    title: 'Помощь',
    link: null,
    routes: [
      { subtitle: 'Информация о доставке', route: Routes.DELIVERY },
      { subtitle: 'Возвраты', route: Routes.ADD_RETURN },
      { subtitle: 'Подарочные сертификаты', route: Routes.VOUCHERS }
    ]
  }
]
