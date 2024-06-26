import { createSlice } from '@reduxjs/toolkit'

import { INewsItem } from '@/pages/NewsItemPage/types/types'
import { rejectedPayloadHandle } from '@/shared/api/rejectedPayloadHandle'
import { REDUCER_NEWS_ITEM } from '@/shared/constants/constants'

import { getNewsItemPage } from '../services/getNewsItemPage'

const initialState: INewsItem = {
  isLoading: false,
  newsItemData: {
    id: 0,
    title: '',
    text: '',
    image: '',
    pub_date: '',
    slug: '',
    meta_title: '',
    meta_description: ''
  }
}

export const newsItemSlice = createSlice({
  name: REDUCER_NEWS_ITEM,
  initialState,
  reducers: {
    errorReset: state => {
      state.error = undefined
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getNewsItemPage.pending, state => {
        state.isLoading = true
      })
      .addCase(getNewsItemPage.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.newsItemData = payload
      })
      .addCase(getNewsItemPage.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = rejectedPayloadHandle(payload)
      })
  }
})
export const { actions: newsItemActions, reducer: newsItemReducer } = newsItemSlice
