import { Permission } from 'src/types/permission.type'

export const isFullAccess = (permissions: Permission[]) => {
  if (!permissions.length) return true // * supper admin
}

export const isAccessRoute = (permissions: Permission[], allowedPermissions: Permission[]) => {
  // * Nếu access control không có permission => return true
  if (!allowedPermissions.length) {
    return true
  }

  // * Nếu là role Admin thì được quyền try cập tất cả access control.
  if (isFullAccess(permissions)) {
    return true
  }

  return permissions
    ? permissions.find((permission: Permission) =>
        allowedPermissions.find((allowPermission: Permission) => allowPermission.id === permission.id)
      )
    : false
}
