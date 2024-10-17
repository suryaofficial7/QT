import { lazy, Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageLoader from "./Components/PageLoader";
import AuthRoute from "./Auth/AuthRoute";
import Logout from "./Auth/Logout";
import PageNotFound from "./Pages/StaticPage/PageNotFound";
import Layout from "./Pages/UserPages/Layout";
const Homepage = lazy(() => import("./Pages/Homepage"));
const LoginPage = lazy(() => import("./Pages/LoginPage"));
const RegisterPage = lazy(() => import("./Pages/RegisterPage"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Bussiness = lazy(() => import("./Pages/Bussiness"));
const Employee = lazy(() => import("./Pages/Employee"));
const Expense = lazy(() => import("./Pages/Expense"));
const Schedule = lazy(() => import("./Pages/Schedule"));
const Secure = lazy(() => import("./Pages/Secure"));
const Feedback = lazy(() => import("./Pages/StaticPage/Feedback"));
const Pricing = lazy(() => import("./Pages/StaticPage/Pricing"));
const Features = lazy(() => import("./Pages/StaticPage/Features"));
const Aboutus = lazy(() => import("./Pages/StaticPage/Aboutus"));
const TermsAndConditions = lazy(() =>
  import("./Pages/StaticPage/TermsAndConditions")
);
const Subscriptions = lazy(() => import("./Pages/UserPages/Subscriptions"));
const NotificationPage = lazy(() => import("./Pages/NotificationPage"));
const Settings = lazy(() => import("./Pages/UserPages/Settings"));
const Profile = lazy(() => import("./Pages/UserPages/Profile"));
function App() {
  // Creating a data that contain all path and element

  const router = createBrowserRouter([
    // !All Routes

    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    

    {
      path: "/user",
      children: [
        {
          path: "/user/setting",
          element: <Settings />,
        },
        {
          path: "/user/profile",
          element: <Profile />,
        },
      ],
    },

    {
      path: "/dashboard/",

      element: <><AuthRoute /><Layout/></>,
      children: [
        {
          path: "/dashboard/",
          element: (
            <>
              <Suspense fallback={<p>Loading</p>}>
                <Dashboard />
              </Suspense>
            </>
          ),
        },
        {
          path: "/dashboard/bussiness",
          element: (
            <>
              <Bussiness />
            </>
          ),
        },
        {
          path: "/dashboard/expense",
          element: (
            <>
              <Expense />
            </>
          ),
        },
        {
          path: "/dashboard/employee",
          element: (
            <>
              <Employee />
            </>
          ),
        },
        {
          path: "/dashboard/secure",
          element: (
            <>
              <Secure />
            </>
          ),
        },
        {
          path: "/dashboard/schedule",
          element: (
            <>
              <Schedule />
            </>
          ),
        },
        {
          path: "/dashboard/notifications",
          element: (
            <>
              <NotificationPage />
            </>
          ),
        },
      ],
    },

    // ! STATIC PAGES
    {
      path: "/feedback",
      element: <Feedback />,
    },
    {
      path: "/aboutus",
      element: <Aboutus />,
    },
    {
      path: "/features",
      element: <Features />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/terms&conditions",
      element: <TermsAndConditions />,
    },
    {
      path: "/subscriptions",
      element: <Subscriptions />,
    },

    {
      path: "*",
      element: <PageNotFound />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
  ]);

  return (
    <>
      <Suspense fallback={<PageLoader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
