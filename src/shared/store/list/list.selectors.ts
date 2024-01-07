import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

export const getSharedListState = (state: RootState) => state

export const getMainCtegories = createSelector(
  getSharedListState,
  state => state.sharedList.mainCategories
)
