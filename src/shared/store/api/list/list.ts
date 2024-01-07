import api from '../api'
import { AnnouncementPayload, MainCategoryResponse } from './list.types'

export const listApi = api.injectEndpoints({
  endpoints: builder => ({
    getMainCategories: builder.query<MainCategoryResponse, {}>({
      query: () => ({
        method: 'GET',
        url: '/MainCategory',
      }),
    }),
    postAnnouncement: builder.mutation<any, AnnouncementPayload>({
      query: ({ errorMessage, successMessage, ...body }) => ({
        method: 'POST',
        url: '/Announcement',
        body: body,
      }),
    }),
  }),
})
