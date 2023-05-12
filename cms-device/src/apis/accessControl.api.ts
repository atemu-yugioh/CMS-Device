import { AccessControl } from 'src/types/accessControl.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'access-controls'

const accessControlApi = {
  getParentAccessControl: () =>
    http.get<SuccessResponse<{ total_record: number; list: AccessControl[] }>>(`${URL}/parent`),

  getDetailACLByRouteName: (params: { route: string }) =>
    http.get<SuccessResponse<AccessControl>>(`${URL}/by-route`, { params })
}

export default accessControlApi
