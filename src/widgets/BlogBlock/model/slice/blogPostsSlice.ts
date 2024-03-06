import { createSlice } from '@reduxjs/toolkit'

import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { REDUCER_BLOG_POSTS } from '@/shared/constants/constants'

import { getBlogPosts } from '../services/getBlogPosts'
import { IBlogPostsSchema } from '../types/types'

const initialState: IBlogPostsSchema = {
  isLoading: false,
  posts: []
}

export const blogPostsSlice = createSlice({
  name: REDUCER_BLOG_POSTS,
  initialState,
  reducers: {
    errorReset: state => {
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getBlogPosts.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.posts = payload
      })
      .addCase(getBlogPosts.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})
export const { actions: blogPostsActions, reducer: blogPostsReducer } = blogPostsSlice
