import { createBrowserRouter } from 'react-router-dom'

import AboutUsPage from '@/pages/AboutUsPage/AboutUsPage'
import { AccountPage } from '@/pages/AccountPage/AccountPage'
import BlogPage from '@/pages/BlogPage/BlogPage'
import CartPage from '@/pages/CartPage/CartPage'
import { CategoryPage } from '@/pages/CategoryPage/CategoryPage'
import ComparePage from '@/pages/ComparePage/ComparePage'
import ContactsPage from '@/pages/ContactsPage/ContactsPage'
import CreateAccountPage from '@/pages/CreateAccountPage/CreateAccountPage'
import { CreateAccountSuccess } from '@/pages/CreateAccountSuccess/CreateAccountSuccess'
import DeliveryPage from '@/pages/DeliveryPage/DeliveryPage'
import ErrorPage from '@/pages/ErrorPage/ErrorPage'
import { FavoritesPage } from '@/pages/FavoritesPage/FavoritesPage'
import { FeedbackPage } from '@/pages/FeedbackPage/FeedbackPage'
import FormReturnPage from '@/pages/FormReturnPage/FormReturnPage'
import HelpPage from '@/pages/HelpPage/HelpPage'
import LoginPage from '@/pages/LoginPage/LoginPage'
import { LogoutPage } from '@/pages/LogoutPage/LogoutPage'
import MainPage from '@/pages/MainPage/MainPage'
import { PrivacyPage } from '@/pages/PrivacyPage/PrivacyPage'
import { ProductPage } from '@/pages/ProductPage/ProductPage'
import { ProductsPage } from '@/pages/ProductsPage/ProductsPage'
import { ReviewsPage } from '@/pages/ReviewsPage/ReviewsPage'
import RootPage from '@/pages/RootPage/RootPage'
import SearchResultsPage from '@/pages/SearchResultsPage/SearchResultsPage'
import { TermsPage } from '@/pages/TermsPage/TermsPage'
import VouchersPage from '@/pages/VouchersPage/VouchersPage'
import { Routes } from '@/shared/config/routerConfig/routes'

import ProtectedRoute from './ProtectedRoute'

export const AppRouter = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <RootPage />,
    // errorElement: <ErrorPage />,
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
        element: <PrivacyPage />
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
        path: Routes.FEEDBACKS + '/:index',
        element: <FeedbackPage />
      },
      {
        path: Routes.REVIEWS,
        element: <ReviewsPage />
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
        path: Routes.TERMS,
        element: <TermsPage />
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
      },
      {
        path: Routes.ACCOUNT,
        element: <ProtectedRoute element={AccountPage} />
      },
      {
        path: Routes.CREATE_ACCOUNT_SUCCESS,
        element: <CreateAccountSuccess />
      },
      {
        path: Routes.LOGOUT,
        element: <LogoutPage />
      },
      {
        path: Routes.REGISTRATION,
        element: <CreateAccountPage />
      },
      {
        path: Routes.SUBSCRIBE,
        element: <CreateAccountPage /> //TODO реалзиовать страницу подписки
      },
      {
        path: Routes.ERROR,
        element: <ErrorPage />
      }

      /*       {
        path: Routes.CERTIFICATE,
        element: <Certificate />
      } */
    ]
  }
])
