import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import LoginPage from "./components/Login/LoginPage.jsx"
import ProtectedRoute from "./components/Route/ProtectedRoute.jsx"
import ErrorPage from "./Pages/Error/ErrorPage.jsx"
import PortfolioPage from "./Pages/Portfolio/PortfolioPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      { path: "/ProtectedRoute", element: <ProtectedRoute />},
      { path: "/LoginPage", element: <LoginPage /> },
      { path: "/", element: <App /> },
      { path: "/PortfolioPage", element: <PortfolioPage /> }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)




