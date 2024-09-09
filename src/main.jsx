import React from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App"
import ErrorPage from "./pages/ErrorPage"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import EventPage from "./pages/EventPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
