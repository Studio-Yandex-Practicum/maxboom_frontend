import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'

import { Category, CategorySchema } from '../types/types'

const initialState: CategorySchema = {
  categories: [],
  displayedCategories: [],
  error: undefined
}

export const fetchCategories = createAsyncThunk<Category[], void, ThunkConfig<ApiError>>(
  'category/fetchCategories',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    try {
      const response = await extra.api.get(`api/${ApiRoutes.CATEGORIES}`)
      return response.data as Category[]
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.AUTH_ERROR))
    }
  }
)

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.error = undefined
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload
        state.displayedCategories = action.payload.filter((c: Category) => c.is_visible_on_main === true)
      })
      .addCase(fetchCategories.rejected, (state, { payload }) => {
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export default categorySlice.reducer
