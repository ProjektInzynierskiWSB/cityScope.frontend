import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginFormValues } from 'modules/authorization/components/LoginForm/LoginForm.config'
import { env } from 'shared/utils'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: env.apiUrl,
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: (body: LoginFormValues) => ({
        url: '/api/Auth/Login',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation({
      query: (body: LoginFormValues) => ({
        url: '/api/Auth/Register',
        method: 'POST',
        body,
      }),
    }),
  }),
})
export const { useLoginMutation, useRegisterMutation } = authApi
