import { Link, Navigate, useNavigate } from 'react-router-dom'
import { BiAddToQueue, BiShowAlt } from 'react-icons/bi'
import { Department } from 'src/types/department.type'
import { Role } from 'src/types/role.type'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import Table, { IColumnType } from 'src/components/Table/Table'
import ButtonAction from 'src/components/ButtonAction'
import { useState } from 'react'

export interface Employee {
  id: string
  full_name: string
  email: string
  phone: string
  department: Department | null
  roles: Role[] | []
  address: string
  action?: {
    handleView: (id: string) => void
    handleEdit: (id: string) => void
    handleDelete: (id: string) => void
  }
}

const columns: IColumnType<Employee>[] = [
  {
    key: 'full_name',
    title: 'Name'
  },
  {
    key: 'email',
    title: 'Email'
  },
  {
    key: 'phone',
    title: 'Phone'
  },
  {
    key: 'department',
    title: 'Department',
    render: (_, { department }) => <>{department?.name}</>
  },
  {
    key: 'roles',
    title: 'Role',
    render: (_, { roles, department }) => {
      if (department === null) {
        return 'Supper Admin'
      }

      if (!roles.length) {
        return 'Employee'
      }

      return roles[0].name
    }
  },
  {
    key: 'address',
    title: 'Address'
  },
  {
    key: 'action',
    title: 'Action',
    render: (_, { action }) => {
      if (action) {
        const { handleView, handleEdit, handleDelete } = action
        return (
          <>
            <ButtonAction actionString='view' onClick={() => handleView} />
            <ButtonAction actionString='edit' onClick={() => handleEdit} />
            <ButtonAction actionString='delete' onClick={() => handleDelete} />
          </>
        )
      } else {
        return (
          <>
            <ButtonAction actionString='view' />
            <ButtonAction actionString='edit' />
            <ButtonAction actionString='delete' />
          </>
        )
      }
    }
  }
]

const listEmployeeInit: Employee[] = [
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

const EmployeeTable = () => {
  const navigate = useNavigate()

  const [listEmployee, setListEmployee] = useState(listEmployeeInit)

  // Action View
  const handleView = (id: string) => {
    console.log(id)
    navigate({ pathname: '/dashboard' })
  }

  // Action Edit
  const handleEdit = (id: string) => {
    const foundEmployee = listEmployee.find((employee) => employee.id === id)
    const foundEmployeeIndex = listEmployee.findIndex((employee) => employee.id === id)
    if (foundEmployeeIndex !== -1 && foundEmployee) {
      listEmployee[foundEmployeeIndex] = { ...foundEmployee, full_name: `${foundEmployee?.full_name} (đã chỉnh sửa)` }
      setListEmployee([...listEmployee])
    }
  }

  // Action Delete
  const handleDelete = (id: string) => {
    const foundEmployeeIndex = listEmployee.findIndex((employee) => employee.id === id)
    if (foundEmployeeIndex !== -1) {
      listEmployee.splice(foundEmployeeIndex, 1)
      setListEmployee([...listEmployee])
    }
  }
  return (
    <>
      <div className='mx-5 flex items-center justify-between'>
        <h3 className='text-xl font-bold'>Employee</h3>
        <div>
          <button
            type='button'
            className='mb-2 mr-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none  dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800'
          >
            <BiAddToQueue className='mr-2 inline' />
            <span>Add New</span>
          </button>
        </div>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <Table
          data={listEmployee}
          columns={columns}
          handleView={(id) => handleView(id)}
          handleEdit={(id) => handleEdit(id)}
          handleDelete={(id) => handleDelete(id)}
        />
        {/* pagination */}
        <nav className='flex items-center justify-between pt-3' aria-label='Table navigation'>
          <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
            Showing <span className='font-semibold text-gray-900 dark:text-white'>1-10</span> of{' '}
            <span className='font-semibold text-gray-900 dark:text-white'>1000</span>
          </span>
          <ul className='inline-flex items-center -space-x-px'>
            <li>
              <Link
                to='#'
                className='ml-0 block rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                <span className='sr-only'>Previous</span>
                <svg
                  className='h-5 w-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                1
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                2
              </Link>
            </li>
            <li>
              <Link
                to='#'
                aria-current='page'
                className='z-10 border border-blue-300 bg-blue-50 px-3 py-2 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              >
                3
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                ...
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                100
              </Link>
            </li>
            <li>
              <Link
                to='#'
                className='block rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              >
                <span className='sr-only'>Next</span>
                <svg
                  className='h-5 w-5'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default EmployeeTable
