import useRouteElement from './useRouteElement'

function App() {
  const routeElements = useRouteElement()

  return <div>{routeElements}</div>
  // return (
  //   <div className='flex h-screen'>
  //     <div className='w-64 bg-gray-800 text-gray-100'></div>
  //   </div>
  // )
}

export default App
