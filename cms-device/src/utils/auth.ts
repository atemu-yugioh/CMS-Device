import employeeApi from 'src/apis/employee.api'
import { User } from 'src/types/user.type'

export const setAccessTokenToLs = (accessToken: string) => {
  localStorage.setItem('access_token', accessToken)
}
export const getAccessTokenFromLs = () => localStorage.getItem('access_token') || ''

export const clearAccessTokenFromLs = () => localStorage.removeItem('access_token')

export const setProfileToLs = async (id: string) => {
  const data = await employeeApi.getEmployeeDetail(id)
  const profile = data.data.data
  if (profile) {
    localStorage.setItem('profile', JSON.stringify(profile))
  }
  return profile
}

export const getProfileFromLs = () => {
  const result = localStorage.getItem('profile')
  return result ? JSON.parse(result) : null
}

export const clearProfileFromLs = () => localStorage.removeItem('profile')

export const clearLs = () => {
  clearAccessTokenFromLs()
  clearProfileFromLs()
}
