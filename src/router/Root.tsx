import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductsPage } from '../pages/ProductsPage/ProductsPage'

export function Root() {
  return (
    <Routes>
      <Route path="/products" Component={ProductsPage} />
    </Routes>
  )
}
