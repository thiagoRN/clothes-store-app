import { createBrowserRouter, RouterProvider,} from "react-router-dom";
  import App from '../App'
import Product from "../components/Product";
import About from "../components/About";
import Home from "../Home/Home";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadClothes from "../dashboard/UploadClothes";
import EditClothes from "../dashboard/EditClothes";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/product/:id",
          element: <Product/>,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        }

      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          path: "/admin/dashboard",
          element: <Dashboard />
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadClothes />
        },
        {
          path: "/admin/dashboard/edit-clothes/:id",
          element: <EditClothes />,
          loader: ({params}) => fetch(`http://localhost:5000/product/${params.id}`)
        }
      ]
    }
  ]);

  export default router;