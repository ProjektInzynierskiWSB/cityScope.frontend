import api from '../api'
import {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from './auth.types'

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginPayload>({
      query: ({ email, password }) => ({
        method: 'POST',
        url: '/Auth/Login',
        body: {
          email,
          password,
        },
      }),
    }),
    register: builder.mutation<RegisterResponse, RegisterPayload>({
      query: body => ({
        method: 'POST',
        url: '/Auth/Register',
        body: body,
      }),
    }),
  }),
})
