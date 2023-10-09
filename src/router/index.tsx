import { createBrowserRouter } from 'react-router-dom'
import { Routes } from '../constants/routes'
import MainPage from '../pages/MainPage/MainPage'
import { ProductsPage } from '../pages/ProductsPage/ProductsPage'
import { Root } from './Root'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    Component: MainPage
  },
  {
    path: Routes.PRODUCTS,
    Component: ProductsPage
  },
  { path: '*', Component: Root }
])
