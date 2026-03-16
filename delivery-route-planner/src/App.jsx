import "./App.css"
import "./styles/reset.css"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import  Navbar  from "./sections/Navbar";
import RoutePanel from "./pages/RoutePanel";
import Footer from "./sections/Footer";


function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <RoutePanel />
      }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
