import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Routes } from '../constants/routes'
import MainPage from '../pages/MainPage/MainPage'
import BlogPage from '../pages/BlogPage/BlogPage'

export const router = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <MainPage />
  },
  {
    path: Routes.BLOG,
    element: <BlogPage />
  }
])
