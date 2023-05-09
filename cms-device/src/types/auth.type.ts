import { SuccessResponse } from './utils.type'
export type AuthResponse = SuccessResponse<{
  id: string
  access_token: string
  refresh_token: string
}>
