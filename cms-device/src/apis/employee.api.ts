import { User } from 'src/types/user.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'

const URL = 'employee'

const employeeApi = {
  getEmployeeDetail: (id: string) => {
    return http.get<SuccessResponse<User>>(`${URL}/${id}`)
  }
}

export default employeeApi
