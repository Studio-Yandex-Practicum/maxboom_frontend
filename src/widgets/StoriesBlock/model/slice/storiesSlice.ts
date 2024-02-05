import { createSlice } from '@reduxjs/toolkit'
import { getStories } from '../services/getStories'
import { IStoriesSchema } from '../types/types'

const initialState: IStoriesSchema = {
  isLoading: false,
  stories: []
}

export const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getStories.pending, state => {
        state.isLoading = true
      })
      .addCase(getStories.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.stories = payload
      })
      .addCase(getStories.rejected, state => {
        state.isLoading = false
      })
  }
})

export const { actions: storiesActions, reducer: storiesReducer } = storiesSlice
