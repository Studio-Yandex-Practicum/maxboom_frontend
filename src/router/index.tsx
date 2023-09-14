import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Routes } from '../constants/routes'
import SliderPage from '../pages/SliderPage'
import StoriesPage from '../pages/StoriesPage'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <SliderPage />
  },
  {
    path: Routes.STORIES,
    element: <StoriesPage />
  }
])
