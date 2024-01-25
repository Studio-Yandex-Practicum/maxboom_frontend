import { createBrowserRouter } from 'react-router-dom'
import { Routes } from '@/shared/config/routerConfig/routes'
import MainPage from '@/pages/MainPage/MainPage'
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage'
import BlogPage from '@/pages/BlogPage/BlogPage'
import RootPage from '@/pages/RootPage/RootPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import LoginPage from '@/pages/LoginPage/LoginPage'
import ComparePage from '@/pages/ComparePage/ComparePage'
import FavoritesPage from '@/pages/FavoritesPage/FavoritesPage'
import CartPage from '@/pages/CartPage/CartPage'

export const AppRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <MainPage />
      },
      {
        path: Routes.BLOG,
        element: <BlogPage />
      },
      {
        path: Routes.PRODUCTS_ID,
        element: <ProductsPage />
      },
      // Добавил как временную заглушку пока не будет страницы категории
      {
        path: Routes.CATEGORIES + '/:slug',
        element: <ProductsPage />
      },
      {
        path: Routes.LOGIN,
        element: <LoginPage />
      },
      {
        path: Routes.COMPARE,
        element: <ComparePage />
      },
      {
        path: Routes.FAVORITES,
        element: <FavoritesPage />
      },
      {
        path: Routes.CART,
        element: <CartPage />
      }
    ]
  }
])
