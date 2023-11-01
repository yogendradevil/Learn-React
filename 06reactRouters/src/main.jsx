import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import components from './components'
import App from './App'

// Method 1
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <components.Home />
//       }, 
//       {
//         path: "about",
//         element: <components.About />
//       },
//       {
//         path: "contact",
//         element: <components.Contact />
//       }
//     ]
//   }
// ])

// Method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<components.Home />}></Route>
      <Route path='about' element={<components.About />}></Route>
      <Route path='contact' element={<components.Contact />}></Route>
      <Route path='user/:userId' element={<components.User />}></Route>
      <Route path='github' element={<components.Github />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
