import components from './components'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
    <components.Header />
    <Outlet />
    <components.Footer />
    </>
  )
}

export default App
