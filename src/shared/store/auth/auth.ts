import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authApi } from '../api'

export interface State {
  token: string | null
  userName: string | null
}

const initialState: State = {
  token: null,
  userName: null,
}

const auth = createSlice({
  initialState,
  name: 'sharedAuth',
  reducers: {
    clearToken: state => {
      state.token = null
    },
    setToken: (state, { payload }: PayloadAction<string | null>) => {
      state.token = payload
    },
  },
  extraReducers: builder =>
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload: { data } }) => {
        state.token = data.token
        state.userName = data.userName
      }
    ),
})

const persistConfig = {
  storage,
  key: 'persist-auth-state',
  whiteList: ['token', 'userName'],
}

const reducer = {
  ...auth,
  reducer: persistReducer(persistConfig, auth.reducer),
}

export default reducer
