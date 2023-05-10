import path from 'src/constants/path'
import { AuthResponse } from 'src/types/auth.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'auth'

const authApi = {
  login: (body: { email: string; password: string }) => http.post<AuthResponse>(`${URL}${path.login}`, body),
  logout: () => http.post<SuccessResponse<number[]>>(`${URL}${path.logout}`)
}

export default authApi
