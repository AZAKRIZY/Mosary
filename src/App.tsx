
import './App.css'
import Homepage from './componnent/Pages/Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
import NotFound from './componnent/Pages/NotFound'
import List from './componnent/Pages/List'
import About from './componnent/Pages/About'
import RecipeDetail from './componnent/Pages/RecipeDetail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> }
    ]
  },
  {
    path: "/List",
    element: <RootLayout />,
    children: [
      { index: true, element: <List /> },
      { path: ":id", element: <RecipeDetail /> } // 👈 new route
    ]
  },
  {
    path:"/About",
    element:<RootLayout/>,
    children:[
      {index:true,element:<About/>}
    ]
  },
  {
    path: "*",
    element: <NotFound />

  }
])
function App() {
  return <RouterProvider router={router} />
}


export default App