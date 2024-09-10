import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import ErrorPage from "./pages/ErrorPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EventPage from "./pages/EventPage"
import HomePage from "./pages/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
