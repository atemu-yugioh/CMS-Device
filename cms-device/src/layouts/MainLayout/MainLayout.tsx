import NavHeader from 'src/components/NavHeader'
import SideBar from 'src/components/SideBar'

interface Props {
  children?: React.ReactNode
}
const MainLayout = ({ children }: Props) => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='w-full'>
        <NavHeader />
        <div className='px-5 py-3'>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
