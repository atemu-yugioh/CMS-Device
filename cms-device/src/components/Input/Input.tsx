/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  className?: string
  classNameInput?: string
  classNameError?: string
  classNameIcon?: string
  type: React.HTMLInputTypeAttribute
  placeholder?: string
  name: string
  errorMessage?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  register: UseFormRegister<any>
  rules?: RegisterOptions
}

const Input = ({
  className,
  classNameInput = 'w-full rounded-md border border-gray-300 px-10 py-2 outline-none focus:border-blue-500 focus:shadow-sm',
  classNameError = 'ml-2 mt-1 min-h-[1.25rem] text-sm text-red-500 ',
  classNameIcon = 'inset-y-0 left-0',
  type,
  placeholder,
  name,
  errorMessage,
  icon,
  register,
  rules
}: Props) => {
  return (
    <div className={className}>
      {icon ? <div className={`pointer-events-none absolute flex items-center ${classNameIcon}`}>{icon}</div> : null}
      <input type={type} placeholder={placeholder} className={classNameInput} {...register(name, rules)} />
      <div className={classNameError}>{errorMessage}</div>
    </div>
  )
}

export default Input
