import { Permission } from './permission.type'

export interface AccessControl {
  name: string
  id: string
  route: string
  icon: string
  permissions: Permission[]
  children: AccessControl[]
}
