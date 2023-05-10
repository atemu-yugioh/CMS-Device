import axios, { type AxiosInstance, AxiosError } from 'axios'
import { toast } from 'react-toastify'
import config from 'src/constants/config'
import path from 'src/constants/path'
import { AuthResponse } from 'src/types/auth.type'
import { clearAccessTokenFromLs, getAccessTokenFromLs, setAccessTokenToLs } from './auth'

class Http {
  instance: AxiosInstance
  private access_token: string
  constructor() {
    this.access_token = getAccessTokenFromLs()
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // * interceptors request middleware
    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token && config.headers) {
          config.headers.authorization = this.access_token
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    // interceptors response middleware
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === `auth${path.login}`) {
          const data = response.data as AuthResponse
          this.access_token = data.data?.access_token
          setAccessTokenToLs(this.access_token)
        } else if (url === `auth${path.logout}`) {
          this.access_token = ''
          clearAccessTokenFromLs()
        }
        return response
      },
      (error: AxiosError) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const data: any | undefined = error.response?.data
        const message = data?.message || error.message
        toast.error(message)
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance

export default http
