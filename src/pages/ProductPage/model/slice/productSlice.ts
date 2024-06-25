import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import type { IImage } from '@/shared/model/types/ImageModel'
import type { IProduct } from '@/shared/model/types/ProductModel'

import type { TProductSchema } from '../types/productTypes'

export const getProduct = createAsyncThunk<IProduct, string, ThunkConfig<ApiError>>(
  'product/getProduct',
  async (slug, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    try {
      const response = await extra.api.get(`api/${ApiRoutes.PRODUCT}/${slug}`)
      return response.data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

const initialState: TProductSchema = {
  error: [''],
  isLoading: false,
  product: {
    label_popular: false,
    label_hit: false,
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
        state.product.images = payload.images.map((img: IImage, index: number) => {
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
