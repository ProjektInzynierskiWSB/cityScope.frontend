import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { listApi } from '../api'
import { MainCategoryState } from '../api/list'

export interface State {
  mainCategories: MainCategoryState[] | null
}

const initialState: State = {
  mainCategories: null,
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
    builder.addMatcher(
      listApi.endpoints.getMainCategories.matchFulfilled,
      (state, { payload: { data } }) => {
        state.mainCategories = data.map(category => ({
          value: category.id,
          key: category.name,
        }))
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
