import { useContext, useState } from 'react'
import { AiTwotoneSetting } from 'react-icons/ai'
import { HiChevronDown } from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from 'src/contexts/app.context'
import { AccessControl } from 'src/types/accessControl.type'
import { isAccessRoute } from 'src/utils/utils'

interface Props {
  key: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  item: AccessControl
  openSideBar: boolean
}

const SideBarItem = ({ item, openSideBar }: Props) => {
  const [open, setOpen] = useState(true)
  const { profile } = useContext(AppContext)
  const { pathname } = useLocation()

  const isActive = (route: string) => {
    return route === pathname ? 'bg-light-white' : ''
  }

  if (item?.children && item.children.length) {
    // Nếu có chứa các route con thì lọc các route con thỏa điều kiện được phép truy xuất vào
    const listChildren = item.children.filter(
      (child: AccessControl) => profile?.id && isAccessRoute(profile?.permissions, child.permissions)
    )

    return (
      <>
        <Link to={listChildren[0]?.route}>
          <div
            className={`mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300 hover:bg-light-white ${isActive(
              item.route
            )}`}
            onClick={() => setOpen(!open)}
            aria-hidden='true'
          >
            <span className='float-left block text-2xl'>{item.icon ? item.icon : <AiTwotoneSetting />}</span>
            <span className={` flex-1 text-base font-medium duration-200 ${!openSideBar && 'hidden'}`}>
              {item.name}
            </span>

            <HiChevronDown
              className={`duration-200 ${!open && 'rotate-180'}`}
              onClick={() => setOpen(!open)}
              aria-hidden='true'
            />
          </div>
        </Link>

        <div className={`${!open || !openSideBar ? 'max-h-0' : 'max-h-96'} overflow-hidden pl-5 pt-1 duration-300`}>
          {listChildren.map((child: AccessControl, index: number) => (
            <SideBarItem key={index} item={child} openSideBar={openSideBar} />
          ))}
        </div>
      </>
    )
  } else {
    return (
      <Link to={item.route}>
        <div
          className={`mt-2 flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300 hover:bg-light-white ${isActive(
            item.route
          )}`}
        >
          <span className='float-left block text-2xl'>{item.icon ? item.icon : <AiTwotoneSetting />}</span>
          <span className={` flex-1 text-base font-medium duration-200 ${!openSideBar && 'hidden'}`}> {item.name}</span>
        </div>
      </Link>
    )
  }
}

export default SideBarItem
