import { ApiMiddlewarePayload } from '../api.types'

export interface MainCategory {
  id: number
  name: string
}

export interface MainCategoryState {
  value: number
  key: string
}

export interface MainCategoryResponse {
  data: MainCategory[]
  success: boolean
  message: string
}

export interface AnnouncementPayload extends ApiMiddlewarePayload {
  title: string
  description: string
  price: number
  image: File | null
  mainCategoryId: number
}
