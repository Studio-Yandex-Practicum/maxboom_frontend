import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import type { IProductCartList } from '@/shared/model/types/ProductCartListModel'

import type { IAddedProduct } from '../types/types'

import { getCart } from './getCart'

export const putRenewProductAmount = createAsyncThunk<IProductCartList, IAddedProduct, ThunkConfig<ApiError>>(
  'cartEntitie/renew-product-amount',
  async (request, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.put(`api/${ApiRoutes.RENEW_PRODUCT_AMOUNT}${request.cart}/`, {
        product: request.product,
        cart: request.cart,
        amount: request.amount
      })
      thunkAPI.dispatch(getCart())
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
