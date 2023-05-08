import LoginHeader from 'src/components/LoginHeader'

interface Props {
  children?: React.ReactNode
}

const LoginLayout = ({ children }: Props) => {
  return (
    <div>
      <LoginHeader />
      {children}
    </div>
  )
}

export default LoginLayout
