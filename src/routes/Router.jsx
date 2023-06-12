import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login-register/Login";
import Register from "../pages/login-register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import SelectedClasses from "../pages/dashboard/student/SelectedClasses";
import EnrolledClasses from "../pages/dashboard/student/EnrolledClasses";
import AddClass from "../pages/dashboard/instructor/AddClass";
import MyClasses from "../pages/dashboard/instructor/MyClasses";
import ManageClasses from "../pages/dashboard/admin/ManageClasses";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import Instructor from "../pages/instructor/Instructor";
import Classes from "../pages/classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/dashboard/student/Payment";
import ErrorPage from "./ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/instructor',
          element: <Instructor></Instructor>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children: [
            {
              path: 'selected-classes',
              element: <SelectedClasses></SelectedClasses>
            },
            {
              path: 'enrolled-classes',
              element: <EnrolledClasses></EnrolledClasses>
            },
            {
              path: 'add-class',
              element: <AddClass></AddClass>
            },
            {
              path: 'my-classes',
              element: <MyClasses></MyClasses>
            },
            {
              path: 'manage-classes',
              element: <ManageClasses></ManageClasses>
            },
            {
              path: 'manage-users',
              element: <ManageUsers></ManageUsers>
            },
            {
              path: 'payment',
              element: <Payment></Payment>
            }
          ]
        },
      ]
    },
  ]);

  export default router