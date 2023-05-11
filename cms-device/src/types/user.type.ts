import { Department } from './department.type'
import { Permission } from './permission.type'
import { Role } from './role.type'

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  full_name: string
  avatar: string
  address: string
  phone: string
  birth_day: string
  gender: string
  salary: number
  department_id: string
  disable: boolean
  createdAt: Date
  updatedAt: Date
  access_token: string
  refresh_token: string
  permissions: Permission[]
  roles: Role[]
  department: Department[]
}
