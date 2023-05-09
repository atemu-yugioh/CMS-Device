import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'

const URL = 'auth'

const authApi = {
  login: (body: { email: string; password: string }) => http.post<AuthResponse>(`${URL}/login`, body)
}

export default authApi
