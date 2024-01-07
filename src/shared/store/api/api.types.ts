export interface ApiNotificationsMiddlewarePayload {
  errorMessage?: string | boolean
  successMessage?: string | boolean
}

export interface ApiMiddlewarePayload
  extends ApiNotificationsMiddlewarePayload {}
