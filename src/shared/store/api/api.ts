import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { RootState } from 'app/store'
import qs from 'qs'
import { env } from 'shared/utils'

const prepareHeaders = (
  headers: Headers,
  { getState }: Pick<BaseQueryApi, 'getState'>
) => {
  const { token } = (getState() as RootState).sharedAuth
  if (token) headers.set('Authorization', `Bearer ${token}`)
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    prepareHeaders,
    baseUrl: env.apiUrl,
    paramsSerializer: qs.stringify,
    credentials: 'same-origin',
  }),
  endpoints: () => ({}),
})

export default api
