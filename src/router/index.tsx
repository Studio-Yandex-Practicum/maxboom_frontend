import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Routes } from '../constants/routes'
import MainPage from '../pages/MainPage/MainPage'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <MainPage />
  }
])
