import { Routes } from '@/shared/config/routerConfig/routes'

import { IData } from '../types/types'

const user: IData[] = [
  {
    title: 'Мои данные',
    routes: [
      { subtitle: 'Личный Кабинет', route: Routes.HOME }, // '/my-account' - данного роута пока нет
      { subtitle: 'Изменить контактную информацию', route: Routes.HOME }, // '/edit-account' - данного роута пока нет
      { subtitle: 'Изменить свой пароль', route: Routes.HOME }, // '/change-password' - данного роута пока нет
      { subtitle: 'Изменить мои адреса', route: Routes.HOME }, // '/address-book' - данного роута пока нет
      { subtitle: 'Посмотреть закладки', route: Routes.HOME } // '/wishlist' - данного роута пока нет
    ]
  }
]

const noUser: IData[] = [
  {
    title: 'Мои данные',
    routes: [
      { subtitle: 'Вход', route: Routes.LOGIN },
      { subtitle: 'Регистрация', route: Routes.HOME }, // '/create-account' - данного роута пока нет
      { subtitle: 'Забыли пароль?', route: Routes.HOME }, // '/forgot-password' - данного роута пока нет
      { subtitle: 'Личный Кабинет', route: Routes.HOME } // '/my-account' - данного роута пока нет
    ]
  }
]

const forAll: IData[] = [
  {
    title: 'Мои заказы',
    routes: [
      { subtitle: 'История заказов', route: Routes.HOME }, // '/order-history' - данного роута пока нет
      { subtitle: 'Файлы для скачивания', route: Routes.HOME }, // '/downloads' - данного роута пока нет
      { subtitle: 'Бонусные баллы: 0', route: Routes.HOME }, // '/reward-points' - данного роута пока нет
      { subtitle: 'Запросы на возврат', route: Routes.HOME }, // '/returns' - данного роута пока нет
      { subtitle: 'История транзакций', route: Routes.HOME }, // '/transactions' - данного роута пока нет
      { subtitle: 'Периодические платежи', route: Routes.HOME } // '/index.php?route=account/recurring' - данного роута пока нет
    ]
  },
  {
    title: 'Мой партнерский аккаунт',
    routes: [{ subtitle: 'Регистрация партнерского аккаунта', route: Routes.HOME }]
  }, // '/index.php?route=account/affiliate/add' - данного роута пока нет
  {
    title: 'Подписка',
    routes: [{ subtitle: 'Подписаться или отказаться от рассылки новостей', route: Routes.HOME }]
  } // '/newsletter' - данного роута пока нет
]

export const userData = user.concat(forAll)

export const noUserData = noUser.concat(forAll)
