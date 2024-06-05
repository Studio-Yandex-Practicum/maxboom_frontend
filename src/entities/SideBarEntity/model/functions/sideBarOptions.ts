import { Routes } from '@/shared/config/routerConfig/routes'

const user = [
  {
    title: 'Мои данные',
    routes: [
      { subtitle: 'Личный Кабинет', route: Routes.ACCOUNT },
      { subtitle: 'Изменить контактную информацию', route: Routes.HOME }, // '/edit-account' - данного роута пока нет
      { subtitle: 'Изменить свой пароль', route: Routes.HOME }, // '/change-password' - данного роута пока нет
      { subtitle: 'Изменить мои адреса', route: Routes.HOME }, // '/address-book' - данного роута пока нет
      { subtitle: 'Посмотреть закладки', route: Routes.FAVORITES }
    ]
  }
]

const noUser = [
  {
    title: 'Мои данные',
    routes: [
      { subtitle: 'Вход', route: Routes.LOGIN },
      { subtitle: 'Регистрация', route: Routes.HOME }, // '/create-account' - данного роута пока нет
      { subtitle: 'Забыли пароль?', route: Routes.HOME }, // '/forgot-password' - данного роута пока нет
      { subtitle: 'Личный Кабинет', route: Routes.ACCOUNT }
    ]
  }
]

const forAll = [
  {
    title: 'Мои заказы',
    routes: [
      { subtitle: 'История заказов', route: Routes.ORDER_HISTORY },
      { subtitle: 'Файлы для скачивания', route: Routes.DOWNLOADS },
      { subtitle: 'Бонусные баллы: 0', route: Routes.HOME }, // '/reward-points' - данного роута пока нет
      { subtitle: 'Запросы на возврат', route: Routes.HOME }, // '/returns' - данного роута пока нет
      { subtitle: 'История транзакций', route: Routes.TRANSACTIONS },
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

export const getSideBarAuth = () => user.concat(forAll)

export const getSideBarUnAuth = () => noUser.concat(forAll)
