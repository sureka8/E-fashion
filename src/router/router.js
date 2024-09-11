import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Singleproduct from "../components/Singleproduct";
import Main from "../components/Main";
const router = createBrowserRouter([
{
    path:'/',
    element:<App  />,
    children:[
        {
            path:'/',
            element:<Main />
        },
        {
            path:'/product/:id',
            element:<Singleproduct />
        }
    ]
}
])

export default router