import { AccessControl } from 'src/types/accessControl.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'access-controls'

const accessControlApi = {
  getParentAccessControl: () =>
    http.get<SuccessResponse<{ total_record: number; list: AccessControl[] }>>(`${URL}/parent`)
}

export default accessControlApi
