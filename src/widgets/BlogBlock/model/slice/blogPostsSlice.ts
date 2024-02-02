import { createSlice } from '@reduxjs/toolkit'
import { IBlogPostsSchema } from '../types/types'
import { getBlogPosts } from '../services/getBlogPosts'
import { REDUCER_BLOG_POSTS } from '@/shared/constants/constants'

const initialState: IBlogPostsSchema = {
  isLoading: false,
  posts: []
}

export const blogPostsSlice = createSlice({
  name: REDUCER_BLOG_POSTS,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBlogPosts.pending, state => {
        state.isLoading = true
      })
      .addCase(getBlogPosts.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.posts = payload
      })
      .addCase(getBlogPosts.rejected, state => {
        state.isLoading = false
      })
  }
})
export const { actions: blogPostsActions, reducer: blogPostsReducer } = blogPostsSlice
