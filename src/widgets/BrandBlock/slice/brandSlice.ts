import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApiError, ApiErrorTypes, ApiRoutes } from '@/shared/api/types'
import { ThunkConfig } from '@/app/providers/SroreProvider/config/StateSchema'
import { Brand, BrandSchema } from '../types/types'
import { apiErrorIdentify } from '@/shared/api/apiErrorIdentify'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'

const initialState: BrandSchema = {
  brands: [],
  error: undefined
}

export const fetchBrands = createAsyncThunk<Brand[], void, ThunkConfig<ApiError>>(
  'catalogue/brand',
  async (_, thunkAPI) => {
    const { rejectWithValue, extra } = thunkAPI

    try {
      const response = await extra.api.get(`api/${ApiRoutes.BRANDS}`)

      return response.data as Brand[]
    } catch (error) {
      return rejectWithValue(apiErrorIdentify(error, ApiErrorTypes.DATA_EMPTY_ERROR))
    }
  }
)

const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchBrands.pending, state => {
        state.error = undefined
      })
      .addCase(fetchBrands.fulfilled, (state, { payload }) => {
        state.brands = payload.filter((c: Brand) => c.is_visible_on_main === true)
      })
      .addCase(fetchBrands.rejected, (state, { payload }) => {
        state.error = rejectedPayloadHandle(payload)
      })
  }
})

export default brandSlice.reducer
