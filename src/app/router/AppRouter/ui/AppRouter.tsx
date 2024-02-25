import { createBrowserRouter } from 'react-router-dom'

import BlogPage from '@/pages/BlogPage/BlogPage'
import CartPage from '@/pages/CartPage/CartPage'
import { CategoryPage } from '@/pages/CategoryPage/CategoryPage'
import ComparePage from '@/pages/ComparePage/ComparePage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import FavoritesPage from '@/pages/FavoritesPage/FavoritesPage'
import LoginPage from '@/pages/LoginPage/LoginPage'
import MainPage from '@/pages/MainPage/MainPage'
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage'
import RootPage from '@/pages/RootPage/RootPage'
import SearchResultsPage from '@/pages/SearchResultsPage/SearchResultsPage'
import { Routes } from '@/shared/config/routerConfig/routes'

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
        path: Routes.CATEGORIES + '/all',
        element: <CategoryPage />
      },
      {
        path: Routes.CATEGORIES + '/:slug',
        element: <ProductsPage /> // временная заглушка нужна страница категорий
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
      },
      {
        path: Routes.SEARCH,
        element: <SearchResultsPage />
      }
    ]
  }
])
