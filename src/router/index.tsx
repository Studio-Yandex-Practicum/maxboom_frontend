import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Routes } from '../constants/routes'
import MainPage from '../pages/MainPage/MainPage'
import { ProductsPage } from '../pages/ProductsPage/ProductsPage'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <MainPage />,
    children: []
  },
  {
    path: Routes.PRODUCTS,
    element: <ProductsPage />
  }
])
