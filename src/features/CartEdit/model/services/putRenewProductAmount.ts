import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { IProductCartList } from '@/shared/model/types/ProductCartListModel'

import { IRenewProductAmountRequest } from '../types'

export const putRenewProductAmount = createAsyncThunk<
  IProductCartList,
  IRenewProductAmountRequest,
  ThunkConfig<ApiError>
>('cart-renew-product-amount', async (request, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const { data } = await extra.api.put(
      `api/${ApiRoutes.RENEW_PRODUCT_AMOUNT}${request.cart}/`,
      {
        product: request.product,
        cart: request.cart,
        amount: request.amount
      },
      { withCredentials: true }
    )
    return data
  } catch (error) {
    return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
  }
})
