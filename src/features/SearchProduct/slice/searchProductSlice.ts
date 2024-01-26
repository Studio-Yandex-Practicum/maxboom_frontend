import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { SearchResultSchema } from '../types/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { Category } from '@/entities/Category/types/types'
import { TProduct } from '@/shared/model/types/common'

type SearchPayload = {
  category: Category[]
  product: { results: TProduct[] }
}

const initialState: SearchResultSchema = {
  categories: [],
  products: [],
  error: undefined
}

export const search = createAsyncThunk<SearchPayload, string, ThunkConfig<ApiError>>(
  'catalogue/search',
  async (query: string, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    try {
      const { data } = await extra.api.get(`api/${ApiRoutes.SEARCH}/?search=${query}`)
      return data
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.AUTH_ERROR)) as ApiError
    }
  }
)

const searchProductSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(search.pending, state => {
        state.error = undefined
      })
      .addCase(search.fulfilled, (state, action) => {
        const { category, product } = action.payload
        state.categories = category || []
        state.products = product.results || []
      })
      .addCase(search.rejected, (state, { payload }) => {
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export default searchProductSlice.reducer
