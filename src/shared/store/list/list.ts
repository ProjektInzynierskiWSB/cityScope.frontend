import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { listApi } from '../api'
import { Announcement, MainCategoryState } from '../api/list'

export interface State {
  mainCategories: MainCategoryState[] | null
  annoucements: Announcement[] | null
  annoucement: Announcement | null
}

const initialState: State = {
  mainCategories: null,
  annoucements: null,
  annoucement: null,
}

const list = createSlice({
  initialState,
  name: 'sharedList',
  reducers: {
    clearMainCategories: state => {
      state.mainCategories = null
    },
  },
  extraReducers: builder =>
    builder
      .addMatcher(
        listApi.endpoints.getMainCategories.matchFulfilled,
        (state, { payload: { data } }) => {
          state.mainCategories = data.map(category => ({
            value: category.id,
            key: category.name,
          }))
        }
      )
      .addMatcher(
        listApi.endpoints.getAnnouncements.matchFulfilled,
        (state, { payload: { data } }) => {
          state.annoucements = data.announcements
        }
      )
      .addMatcher(
        listApi.endpoints.getAnnouncement.matchFulfilled,
        (state, { payload: { data } }) => {
          state.annoucement = data
        }
      ),
})

const persistConfig = {
  storage,
  key: 'persist-list-state',
  whiteList: ['mainCategories'],
}

const reducer = {
  ...list,
  reducer: persistReducer(persistConfig, list.reducer),
}

export default reducer
