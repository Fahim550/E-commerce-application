import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import MyState from "./context/myState";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/Dashboard";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProductInfo from "./pages/productInfo/ProductInfo";
import AddProducts from "./pages/pages/AddProducts";
import UpdateProducts from "./pages/pages/UpdateProducts";
import NoPage from "./pages/nopage/NoPage";
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from "./pages/allproducts/AllProducts";
import ProductsCard from "./Component/productsCard/ProductsCard";

// const router = createBrowserRouter(allroutes);
function App() {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<AllProducts/>} />
          <Route path="/productcard" element={<ProductsCard/>} />
          <Route path="/order" element={
            <ProtectedRoute><Order /></ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={
            <ProtectedRoute><AddProducts /></ProtectedRoute>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRoute><UpdateProducts /></ProtectedRoute>
          } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
      
    </MyState>
    
  );
}

export default App;
// user
export const ProtectedRoute=({children})=>{
  const user=localStorage.getItem("user")
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}
//addmin
const ProtectedRouteForAdmin = ({children})=> {
  const admin = JSON.parse(localStorage.getItem('user'))
  
  if(admin.user.email === 'ahmedfahim2305@gmail.com'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }

}


