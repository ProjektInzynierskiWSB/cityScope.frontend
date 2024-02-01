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

export interface PostAnnouncementPayload extends ApiMiddlewarePayload {
  formData: FormData
}

export interface Announcement {
  categoryId: number
  createdDate: string
  description: string
  id: number
  imageUrl: string | null
  price: number
  title: string
  userEmail: string
  userId: number
  userName: string
}
export interface GetAnnouncementsResponse {
  data: {
    pageSize: number
    page: number
    allCount: number
    announcements: Announcement[]
  }
  success: boolean
  message: string
}

export interface GetAnnouncementsPayload {
  page: number
  pageSize: number
}

export interface GetAnnouncementResponse {
  data: Announcement
  success: boolean
  message: string
}

export interface GetAnnouncementPayload {
  id: number
}
