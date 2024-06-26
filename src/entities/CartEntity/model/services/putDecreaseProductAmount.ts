import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import type { IProductCartList } from '@/shared/model/types/ProductCartListModel'

import { getCart } from './getCart'

export const putDecreaseProductAmount = createAsyncThunk<IProductCartList, number, ThunkConfig<ApiError>>(
  'cartEntitie/decrease-product-amount',
  async (productId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.put(`api/${ApiRoutes.DECREASE_PRODUCT_AMOUNT}`, { product: productId })
      thunkAPI.dispatch(getCart())
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
