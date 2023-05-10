import { useState } from 'react'
import { HiOutlineArrowCircleLeft } from 'react-icons/hi'
import { AiOutlineBorder } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { AiTwotoneSetting } from 'react-icons/ai'
import { MdPermMedia } from 'react-icons/md'
import { HiOutlineDocumentText } from 'react-icons/hi'

const Menus = [
  {
    title: 'Dashboard'
  },
  {
    title: 'Pages',
    icon: <HiOutlineDocumentText />
  },
  {
    title: 'Media',
    spacing: true,
    icon: <MdPermMedia />
  },
  {
    title: 'Projects',
    submenu: true,
    submenuItems: [{ title: 'Submenu 1' }, { title: 'Submenu 2' }, { title: 'Submenu 3' }]
  },
  {
    title: 'Analytics'
  },
  {
    title: 'Inbox'
  },
  {
    title: 'Profile',
    spacing: true
  },
  {
    title: 'Setting'
  },
  {
    title: 'Logout'
  }
]

const SideBar = () => {
  const [open, setOpen] = useState(true)
  return (
    <div className={`relative h-screen  bg-dark-purple p-5 pt-8 duration-300 ${open ? 'w-80' : 'w-20'}`}>
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
      {/* items */}
      <ul className='pt-2'>
        {Menus.map((menu, index) => (
          <li
            key={index}
            className={`${
              menu.spacing ? 'mt-9' : 'mt-2'
            } flex cursor-pointer items-center gap-x-4 rounded-md p-2 text-sm text-gray-300 hover:bg-light-white`}
          >
            <span className='float-left block text-2xl'>{menu.icon ? menu.icon : <AiTwotoneSetting />}</span>
            <span className={`flex-1 text-base font-medium duration-200 ${!open && 'hidden'}`}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
