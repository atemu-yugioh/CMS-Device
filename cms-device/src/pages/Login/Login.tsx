import { useContext } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import authApi from 'src/apis/auth.api'
import Input from 'src/components/Input'
import { LoginSchema, loginSchema } from 'src/utils/rules'
import { AppContext } from 'src/contexts/app.context'
import Button from 'src/components/Button'
import { setProfileToLs } from 'src/utils/auth'

type FormData = LoginSchema

const Login = () => {
  const { setIsAuthenticated, setProfile, profile } = useContext(AppContext)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body: FormData) => authApi.login(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = data
    loginMutation.mutate(body, {
      onSuccess: async (data) => {
        setIsAuthenticated(true)
        const profileFromLs = await setProfileToLs(data.data.data.id)
        setProfile(profileFromLs)
      },
      onError: (error) => {
        console.log('error', error)
      }
    })
  })

  return (
    <div className='flex h-screen items-center justify-center'>
      <form className='w-auto rounded bg-white p-10' onSubmit={onSubmit} noValidate>
        <div className='text-center text-2xl font-bold'>Log in</div>
        <Input
          type='email'
          name='email'
          placeholder='user name'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
              />
            </svg>
          }
          register={register}
          className='mt-5'
          classNameIcon='py-2 pl-3'
          errorMessage={errors.email?.message}
        />

        <Input
          type='password'
          name='password'
          className='mt-3'
          classNameIcon='py-2 pl-3'
          icon={
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
              />
            </svg>
          }
          placeholder='password'
          errorMessage={errors.password?.message}
          register={register}
        />

        <div className='mt-3 flex justify-between'>
          <div className='flex items-center'>
            <input
              id='checked-remember-me'
              type='checkbox'
              className='h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600'
            />
            <label htmlFor='checked-remember-me' className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
              Remember me
            </label>
          </div>

          <a href='#top' className='text-blue-300'>
            forgot password
          </a>
        </div>
        <div className='mt-3'>
          <Button
            type='submit'
            className='flex w-full items-center justify-center rounded-md bg-blue-500 px-10 py-2'
            disabled={loginMutation.isLoading}
            isLoading={loginMutation.isLoading}
          >
            Log in
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Login
