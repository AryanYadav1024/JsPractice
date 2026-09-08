import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/ContactUs/Contact'
import User from './components/User/User'
import Github from './components/Github/Github'
// We render RouterProvider what it does it, It has 2 major roles
// Watch the URL
// Decide what React component should be rendered for that URL
// So react watches the URL through browser provided api window.location
// Now we Provide RouterProvider to render on the basis of a router prop which is passed on the basis of 
// Route/path in the url which we need to determine using createBrowserRouter
// react router sits between browser and react render tree
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'About',
        element: <About />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'User/:userId',
        element: <User />
      },
      {
        path: 'Github',
        element: <Github />
      }
    ]
  }
])

// another method 

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route index element={<Home />} />
//       <Route path='About' element={<About />} />
//       <Route path='Contact' element={<Contact />} />
//     </Route>  
//   )
// )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
