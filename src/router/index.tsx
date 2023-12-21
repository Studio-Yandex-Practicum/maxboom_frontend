import { createBrowserRouter } from 'react-router-dom'
import { Routes } from '@/shared/config/routerConfig/routes'
import MainPage from '@/pages/MainPage/MainPage'
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage'
import BlogPage from '@/pages/BlogPage/BlogPage'
import RootPage from '@/pages/RootPage/RootPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import CartPage from '@/pages/CartPage/CartPage'

export const router = createBrowserRouter([
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
      {
        path: Routes.CART,
        element: <CartPage />
      }
    ]
  }
])
