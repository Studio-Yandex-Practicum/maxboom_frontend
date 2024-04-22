import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { IProductCartList } from '@/models/ProductCartListModel'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

export const putIncreaseProductAmount = createAsyncThunk<IProductCartList, number, ThunkConfig<ApiError>>(
  'cart-increase-product-amount',
  async (productId, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI
    try {
      const { data } = await extra.api.put(
        `api/${ApiRoutes.INCREASE_PRODUCT_AMOUNT}`,
        { product: productId },
        {
          withCredentials: true
        }
      )
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)
