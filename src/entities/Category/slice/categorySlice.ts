import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApiError, ApiRoutes } from '@/shared/api/types'
import { ThunkConfig } from '@/app/providers/SroreProvider/config/StateSchema'
import { Category, CategorySchema } from '../types/types'

const initialState: CategorySchema = {
  categories: [],
  displayedCategories: []
}

export const fetchCategories = createAsyncThunk<Category[], void, ThunkConfig<ApiError>>(
  'category/fetchCategories',
  async () => {
    const response = await fetch(`${__API__}api/${ApiRoutes.CATEGORIES}`)
    const categories = await response.json()
    return categories as Category[]
  }
)

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload
      state.displayedCategories = action.payload.filter((c: Category) => c.is_visible_on_main === true)
    })
  }
})

export default categorySlice.reducer
