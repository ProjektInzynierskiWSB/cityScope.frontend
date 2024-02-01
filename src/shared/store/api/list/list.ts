import api from '../api'
import {
  PostAnnouncementPayload,
  GetAnnouncementsPayload,
  GetAnnouncementsResponse,
  MainCategoryResponse,
  GetAnnouncementResponse,
  GetAnnouncementPayload,
} from './list.types'

export const listApi = api.injectEndpoints({
  endpoints: builder => ({
    getMainCategories: builder.query<MainCategoryResponse, {}>({
      query: () => ({
        method: 'GET',
        url: '/MainCategory',
      }),
    }),

    getAnnouncements: builder.query<
      GetAnnouncementsResponse,
      GetAnnouncementsPayload
    >({
      query: body => ({
        method: 'GET',
        url: '/Announcement',
        params: body,
      }),
      providesTags: ['Announcement'],
    }),

    getAnnouncement: builder.query<
      GetAnnouncementResponse,
      GetAnnouncementPayload
    >({
      query: ({ id }) => ({
        method: 'GET',
        url: `/Announcement/${id}`,
      }),
    }),

    postAnnouncement: builder.mutation<any, PostAnnouncementPayload>({
      query: ({ formData }) => ({
        method: 'POST',
        url: '/Announcement',
        body: formData,
      }),
      invalidatesTags: ['Announcement'],
    }),
  }),
})
