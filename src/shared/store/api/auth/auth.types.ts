import { ApiMiddlewarePayload } from '../api.types'

export interface RegisterPayload extends ApiMiddlewarePayload {
  email: string
  password: string
  confirmPassword: string
}

export interface RegisterResponse {
  data: string
  success: boolean
  message: string
}

export interface LoginPayload extends ApiMiddlewarePayload {
  email: string
  password: string
}

export interface LoginResponse {
  data: string
  success: boolean
  message: string
}
