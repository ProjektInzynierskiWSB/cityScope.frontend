import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'app/store'

export const getSharedAuthState = (state: RootState) => state.sharedAuth

export const getToken = createSelector(getSharedAuthState, state => state.token)
