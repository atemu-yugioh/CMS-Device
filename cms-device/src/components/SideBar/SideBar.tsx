import { useState, useContext, useEffect } from 'react'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'
import { AiOutlineBorder } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import SideBarItem from '../SideBarItem'
import { AppContext } from 'src/contexts/app.context'
import { useQuery } from '@tanstack/react-query'
import accessControlApi from 'src/apis/accessControl.api'
import { AccessControl } from 'src/types/accessControl.type'

const SideBar = () => {
  const [open, setOpen] = useState(true)
  const [listSideBar, setListSideBar] = useState<AccessControl[]>([])
  const { profile } = useContext(AppContext)

  const { data: accessControlResponse } = useQuery({
    queryKey: ['list-access-control-parent'],
    queryFn: () => accessControlApi.getParentAccessControl()
  })

  useEffect(() => {
    if (accessControlResponse?.data.data.total_record) {
      let accessControlParents: AccessControl[] = accessControlResponse?.data.data.list

      if (profile?.department) {
        accessControlParents = accessControlParents.filter(
          (sidebar: AccessControl) => sidebar.name.toUpperCase() !== 'ACCESS CONTROL'
        )
      }

      setListSideBar([...accessControlParents])
    }
  }, [accessControlResponse?.data.data.list, accessControlResponse?.data.data.total_record, profile?.department])

  return (
    <div className={`relative h-screen  bg-dark-purple p-5 pt-8 duration-300 ${open ? 'w-80' : 'w-20'}`}>
      {/* Button open - close sidebar */}
      <HiOutlineArrowCircleLeft
        className={`absolute -right-3 top-12 cursor-pointer rounded-full border border-dark-purple bg-white text-3xl text-dark-purple ${
          !open && 'rotate-180'
        }`}
        onClick={() => setOpen(!open)}
      />

      {/* logo */}
      <div className='inline-flex'>
        <AiOutlineBorder
          className={`float-left mr-2 block cursor-pointer rounded bg-amber-500 text-4xl duration-500 ${
            open && 'rotate-[360deg]'
          }`}
        />
        <h1 className={`origin-left text-xl font-medium text-white duration-300 ${!open && 'scale-0'}`}>Cms Device</h1>
      </div>

      {/* search */}
      <div className={`mt-6 flex items-center rounded-md bg-light-white ${open ? 'px-4' : 'px-2.5'} py-2`}>
        <BsSearch className={`text-while float-left ${open && 'mr-2'} block cursor-pointer text-lg`} />
        {open && (
          <input
            type={'search'}
            placeholder='Search'
            className='w-full bg-transparent text-base text-white focus:outline-none'
          />
        )}
      </div>

      {/* SideBarItem */}
      <ul className='pt-2'>
        {listSideBar.map((item, index) => (
          <SideBarItem key={index} item={item} openSideBar={open} />
        ))}
      </ul>
    </div>
  )
}

export default SideBar
