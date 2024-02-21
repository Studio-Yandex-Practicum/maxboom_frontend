import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes } from '@/shared/api/types'

import { testProd } from '../constants/constants'
import { IObjectWithImage, TProduct, TProductSchema } from '../types/productTypes'

export const getProduct = createAsyncThunk<TProduct, string, ThunkConfig<ApiError>>(
  'product/getProduct',
  async (slug, thunkAPI) => {
    //TO DO при разработке API использовать строки ниже
    //const { rejectWithValue, extra } = thunkAPI
    const { rejectWithValue } = thunkAPI

    try {
      //TO DO при разработке API использовать строки ниже
      //const response = await extra.api.get(`api/${ApiRoutes.PRODUCT}/${slug}`)
      // return response.data.product
      const mockResponse = testProd
      return mockResponse
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

const initialState: TProductSchema = {
  error: [''],
  isLoading: false,
  product: {
    isPopular: true,
    id: 0,
    category: '',
    brand: '',
    price: 0,
    name: '',
    slug: '',
    description: '',
    code: 0,
    wb_urls: '',
    quantity: 0,
    is_deleted: false,
    wholesale: 0,
    images: []
  }
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getProduct.pending, state => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(getProduct.fulfilled, (state: TProductSchema, { payload }) => {
        state.isLoading = false
        state.product = payload
        state.product.images = payload.images.map((img: IObjectWithImage, index: number) => {
          return {
            image: img.image,
            index
          }
        })
      })
      .addCase(getProduct.rejected, (state: TProductSchema, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export const productSliceReducer = productSlice.reducer
