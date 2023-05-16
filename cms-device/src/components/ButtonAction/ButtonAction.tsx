import { ButtonHTMLAttributes, MouseEventHandler } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BiShowAlt } from 'react-icons/bi'

const btnObjectWithAction = {
  view: (onClick: () => MouseEventHandler<HTMLButtonElement> | undefined) => (
    <button
      onClick={onClick()}
      type='button'
      className='mb-2 mr-2 rounded-lg border border-green-700 px-3 py-2.5 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none  dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800'
    >
      <BiShowAlt />
    </button>
  ),
  edit: (onClick: () => MouseEventHandler<HTMLButtonElement> | undefined) => (
    <button
      onClick={onClick()}
      type='button'
      className='mb-2 mr-2 rounded-lg border border-yellow-400 px-3 py-2.5 text-center text-sm font-medium text-yellow-400 hover:bg-yellow-500 hover:text-white focus:outline-none  dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900'
    >
      <AiFillEdit />
    </button>
  ),
  delete: (onClick: () => MouseEventHandler<HTMLButtonElement> | undefined) => (
    <button
      onClick={onClick()}
      type='button'
      className='mb-2 mr-2 rounded-lg border border-red-700 px-3 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none  dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'
    >
      <AiFillDelete />
    </button>
  )
}

const btnObject = {
  view: (
    <button
      type='button'
      className='mb-2 mr-2 rounded-lg border border-green-700 px-3 py-2.5 text-center text-sm font-medium text-green-700 hover:bg-green-800 hover:text-white focus:outline-none  dark:border-green-500 dark:text-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800'
    >
      <BiShowAlt />
    </button>
  ),
  edit: (
    <button
      type='button'
      className='mb-2 mr-2 rounded-lg border border-yellow-400 px-3 py-2.5 text-center text-sm font-medium text-yellow-400 hover:bg-yellow-500 hover:text-white focus:outline-none  dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900'
    >
      <AiFillEdit />
    </button>
  ),
  delete: (
    <button
      type='button'
      className='mb-2 mr-2 rounded-lg border border-red-700 px-3 py-2.5 text-center text-sm font-medium text-red-700 hover:bg-red-800 hover:text-white focus:outline-none  dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900'
    >
      <AiFillDelete />
    </button>
  )
}

interface ButtonActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  actionString: keyof typeof btnObject
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any
}

const ButtonAction = ({ actionString, onClick }: ButtonActionProps) => {
  if (onClick) {
    return btnObjectWithAction[actionString](onClick)
  }

  return btnObject[actionString]
}

export default ButtonAction
