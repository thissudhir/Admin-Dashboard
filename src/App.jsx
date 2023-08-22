import { createBrowserRouter, RouterProvider, Outlet, Link, } from "react-router-dom";
import { Home } from './pages/home/home'
import { Login } from './pages/login/Login';
import { Navbar } from '../src/components/navbar/Navbar';
import { Menu } from '../src/components/menu/Menu';
import { Register } from './pages/register/Register';
import './style/style.scss'
import { Users } from './pages/users/Users';
import { Transactions } from './pages/transactions/Transactions';
import { Schedules } from './components/schedules/Schedules';

function App() {

  const Layout =()=>{
    return (
      <div className="main">
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
          <Navbar/>
            <Outlet/>
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/', 
      element:<Layout />,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/users",
          element: <Users/>,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
        {
          path: "/schedules",
          element: <Schedules/>,
        },
        
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    
    
  ]);
  
  return (
    // <Router>
      <RouterProvider router={router}/>
        
  )
}

export default App
