import { Employee } from 'src/pages/System/components/EmployeeTable/EmployeeTable'
import { Department } from 'src/types/department.type'
import { Role } from 'src/types/role.type'

const headerField: string[] = ['Name', 'Email', 'Phone', 'Department', 'Role', 'Address', 'Action']
const listEmployee: Employee[] = [
  {
    id: '1',
    full_name: 'Thieng Nguyen',
    email: 'nguyenthieng0106@gmail.com',
    phone: '0337410055',
    department: { name: 'Smart Home', id: 'string', description: '' },
    roles: [
      { id: '4ac39850-95f5-4d10-aa85-96521c389049', description: 'Employee Smart Hom', name: 'EMPLOYEE SMART HOME' }
    ],
    address: 'HCM'
  },
  {
    id: '2',
    full_name: 'Supper Admin',
    email: 'supperadmin@fpt.com.vn',
    phone: '0337410055',
    department: null,
    roles: [],
    address: 'HCM'
  },
  {
    id: '3',
    full_name: 'Thieng Nguyen',
    email: 'nguyenthieng0106@gmail.com',
    phone: '0337410055',
    department: { name: 'Smart Home', id: 'string', description: '' },
    roles: [
      { id: '4ac39850-95f5-4d10-aa85-96521c389049', description: 'Employee Smart Hom', name: 'EMPLOYEE SMART HOME' }
    ],
    address: 'HCM'
  },
  {
    id: '4',
    full_name: 'Supper Admin',
    email: 'supperadmin@fpt.com.vn',
    phone: '0337410055',
    department: null,
    roles: [],
    address: 'HCM'
  },
  {
    id: '5',
    full_name: 'Thieng Nguyen',
    email: 'nguyenthieng0106@gmail.com',
    phone: '0337410055',
    department: { name: 'Smart Home', id: 'string', description: '' },
    roles: [
      { id: '4ac39850-95f5-4d10-aa85-96521c389049', description: 'Employee Smart Hom', name: 'EMPLOYEE SMART HOME' }
    ],
    address: 'HCM'
  },
  {
    id: '6',
    full_name: 'Supper Admin',
    email: 'supperadmin@fpt.com.vn',
    phone: '0337410055',
    department: null,
    roles: [],
    address: 'HCM'
  },
  {
    id: '7',
    full_name: 'Thieng Nguyen',
    email: 'nguyenthieng0106@gmail.com',
    phone: '0337410055',
    department: { name: 'Smart Home', id: 'string', description: '' },
    roles: [
      { id: '4ac39850-95f5-4d10-aa85-96521c389049', description: 'Employee Smart Hom', name: 'EMPLOYEE SMART HOME' }
    ],
    address: 'HCM'
  },
  {
    id: '8',
    full_name: 'Supper Admin',
    email: 'supperadmin@fpt.com.vn',
    phone: '0337410055',
    department: null,
    roles: [],
    address: 'HCM'
  },
  {
    id: '9',
    full_name: 'Thieng Nguyen',
    email: 'nguyenthieng0106@gmail.com',
    phone: '0337410055',
    department: { name: 'Smart Home', id: 'string', description: '' },
    roles: [
      { id: '4ac39850-95f5-4d10-aa85-96521c389049', description: 'Employee Smart Hom', name: 'EMPLOYEE SMART HOME' }
    ],
    address: 'HCM'
  },
  {
    id: '10',
    full_name: 'Supper Admin',
    email: 'supperadmin@fpt.com.vn',
    phone: '0337410055',
    department: null,
    roles: [],
    address: 'HCM'
  }
]
const showRoleText = (roles: Role[], department: Department | null) => {
  if (department === null) {
    return 'Supper Admin'
  }

  if (!roles.length) {
    return 'Employee'
  }

  return roles[0].name
}

const TableTest = () => {
  return (
    <table className='max-h-screen w-full text-left text-sm text-gray-500 dark:text-gray-400'>
      <thead className='bg-gray-50 text-center text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          {headerField.map((field, index) => (
            <th key={index} scope='col' className='px-6 py-3'>
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className='text-center'>
        {listEmployee.map((employee) => (
          <tr
            key={employee.id}
            className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
          >
            <th scope='row' className='whitespace-nowrap px-6 py-3 font-medium text-gray-900 dark:text-white'>
              {employee.full_name}
            </th>
            <td className='px-6 py-3'>{employee.email}</td>
            <td className='px-6 py-3'>{employee.phone}</td>
            <td className='px-6 py-3'>{employee.department?.name}</td>
            <td className='px-6 py-3'>{showRoleText(employee.roles, employee.department)}</td>
            <td className='px-6 py-3'>{employee.address}</td>
            <td className='px-6 py-3'>
              <button
                type='button'
                className='mb-2 mr-2 rounded-lg border border-green-700 px-3 py-2.5 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none  dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800'
              >
                <BiShowAlt />
              </button>
              <button
                type='button'
                className='mb-2 mr-2 rounded-lg border border-yellow-400 px-3 py-2.5 text-center text-sm font-medium text-yellow-400 hover:bg-yellow-500 hover:text-white focus:outline-none  dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900'
              >
                <AiFillEdit />
              </button>
              <button
                type='button'
                className='mb-2 mr-2 rounded-lg border border-red-700 px-3 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none  dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'
              >
                <AiFillDelete />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableTest
