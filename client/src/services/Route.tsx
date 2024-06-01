import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Guest from "../components/Guest";
import Error from "../pages/Error";
import Auth from "../components/Auth";
import Dashboard from "../pages/Dashboard";
import Posts from "../pages/Posts";
import Categories from "../pages/Categories";

const GuestRoute = {
  element: <Guest/>,
  errorElement: <Error/>,
  children: [
    { path: '/', element: <Home/> },
    { path: '/login', element: <Login/> },
  ]
}

const AuthRoute = {
  element: <Auth/>,
  errorElement: <Error/>,
  children: [
    { path: '/dashboard', element: <Dashboard/> },
    { path: '/posts', element: <Posts/> },
    { path: '/categories', element: <Categories/> },
  ]
}

export const Router = createBrowserRouter([
  GuestRoute,
  AuthRoute
])