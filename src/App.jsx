import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu , {loader as menuLoader} from "./features/menu/Menu"
import Cart from "./features/cart/Cart"
import CreateOrder , {action as createOrderAction} from "./features/order/CreateOrder"
import Order , {loader as orderLoader} from "./features/order/Order"

import AppLayout from "./ui/AppLayout" 

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    error: <Error/>,
    children: [
  {
    path: "/",
    element : <Home/> 
  },
  {
    path: "/menu",
    element : <Menu/> ,
    loader:menuLoader,
    error: <Error/>,

  },  
  {
    path: "/cart",
    element :<Cart/> 
  },  
  {
    path: "/order/new",
    element : <CreateOrder />,
    action:createOrderAction
  },  
  {
    path: "/order/:orderId",
    element : <Order/>,
    error: <Error/>,
    loader : orderLoader
  }
    ]
  },
]);





function App(){
  return (
  <div>
    <RouterProvider router={router} />
  </div>    
  )
}
export default App;