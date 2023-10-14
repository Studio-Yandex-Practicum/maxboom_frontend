import { createBrowserRouter } from 'react-router-dom'
import { Routes } from '../constants/routes'
import MainPage from '../pages/MainPage/MainPage'
import { ProductsPage } from '../pages/ProductsPage/ProductsPage'
import BlogPage from '../pages/BlogPage/BlogPage'
import { Root } from './Root'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <MainPage />
  },
  {
    path: Routes.PRODUCTS,
    Component: ProductsPage
  },
  {
    path: Routes.BLOG,
    element: <BlogPage />
  },
  { path: '*', Component: Root }
])
