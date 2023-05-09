import axios, { type AxiosInstance, AxiosError } from 'axios'
import { toast } from 'react-toastify'
import config from 'src/constants/config'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: config.baseUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // interceptors response middleware
    this.instance.interceptors.response.use(
      (response) => {
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
