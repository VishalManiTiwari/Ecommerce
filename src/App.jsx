import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/MyState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/SignUp';
import ProductInfo from './pages/productinfo/ProductInfo';
import AddProduct from './pages/admin/page/AddProduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path='/order' element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path='/cart' element={<Cart />} />
          <Route path='/dashboard' element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
              <AddProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRouteForAdmin>
              <UpdateProduct />
            </ProtectedRouteForAdmin>
          } />
          <Route path='/*' element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to={'/login'} />;
  }
};

const ProtectedRouteForAdmin = ({ children }) => {
  const user = localStorage.getItem('user');
  const admin = user && JSON.parse(user);
  if (admin && admin.user.email === 'vishalmanitiwari2001@gmail.com') {
    return <>{children}</>;
  } else {
    return <Navigate to={'/login'} />;
  }
};
