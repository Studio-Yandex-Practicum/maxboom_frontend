import { createBrowserRouter } from 'react-router-dom'

import AboutUsPage from '@/pages/AboutUsPage/AboutUsPage'
import BlogPage from '@/pages/BlogPage/BlogPage'
import CartPage from '@/pages/CartPage/CartPage'
import { CategoryPage } from '@/pages/CategoryPage/CategoryPage'
import ComparePage from '@/pages/ComparePage/ComparePage'
import ContactsPage from '@/pages/ContactsPage/ContactsPage'
import DeliveryPage from '@/pages/DeliveryPage/DeliveryPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import { FavoritesPage } from '@/pages/FavoritesPage/FavoritesPage'
import { FeedbackPage } from '@/pages/FeedbackPage/FeedbackPage'
import FormReturnPage from '@/pages/FormReturnPage/FormReturnPage'
import HelpPage from '@/pages/HelpPage/HelpPage'
import LoginPage from '@/pages/LoginPage/LoginPage'
import MainPage from '@/pages/MainPage/MainPage'
import { ProductPage } from '@/pages/ProductPage/ProductPage'
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage'
import RootPage from '@/pages/RootPage/RootPage'
import SearchResultsPage from '@/pages/SearchResultsPage/SearchResultsPage'
import VouchersPage from '@/pages/VouchersPage/VouchersPage'
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
        path: Routes.ABOUT,
        element: <AboutUsPage />
      },
      {
        path: Routes.BLOG,
        element: <BlogPage />
      },
      {
        path: Routes.BRANDS,
        element: <ProductsPage /> // временная заглушка нужна страница со всеми брендами
      },
      {
        path: Routes.CATEGORIES,
        element: <CategoryPage />
      },
      {
        path: Routes.CART,
        element: <CartPage />
      },
      {
        path: Routes.CATEGORIES + '/:slug',
        element: <ProductsPage /> // временная заглушка нужна страница категорий
      },
      {
        path: Routes.COMPARE,
        element: <ComparePage />
      },
      {
        path: Routes.DELIVERY,
        element: <DeliveryPage />
      },
      {
        path: Routes.FAVORITES,
        element: <FavoritesPage />
      },
      {
        path: Routes.LOGIN,
        element: <LoginPage />
      },
      {
        path: Routes.NEWS,
        element: <ProductsPage /> // временная заглушка нужна страница с новостями
      },
      {
        path: Routes.PRIVACY,
        element: <ProductsPage /> // временная заглушка нужна страница с политикой безопасности
      },
      {
        path: Routes.PRODUCTS,
        element: <ProductsPage /> // временная заглушка нужна страница со всеми товарами категории или подкатегории
      },
      {
        path: Routes.PRODUCTS_ID,
        element: <ProductsPage />
      },
      {
        path: Routes.REVIEWS,
        element: <FeedbackPage />
      },
      {
        path: Routes.SEARCH,
        element: <SearchResultsPage />
      },
      {
        path: Routes.HELP,
        element: <HelpPage />
      },
      {
        path: Routes.STORE_REVIEWS,
        element: <ProductsPage /> // временная заглушка нужна страница с отзывами о магазине
      },
      {
        path: Routes.TERMS,
        element: <ProductsPage /> // временная заглушка нужна страница с условиями соглашения
      },
      {
        path: Routes.ADD_RETURN,
        element: <FormReturnPage />
      },
      {
        path: Routes.VOUCHERS,
        element: <VouchersPage />
      },
      {
        path: Routes.PRODUCT + '/:slug',
        element: <ProductPage />
      },
      {
        path: Routes.CONTACTS,
        element: <ContactsPage />
      }
      /*       {
        path: Routes.CERTIFICATE,
        element: <Certificate />
      } */
    ]
  }
])
