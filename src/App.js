import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


//admin side
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddProduct from './pages/admin/AddProduct';
import AddShop from './pages/admin/AddShop';
import AdminFloors from './pages/admin/Floors';
import AdminProducts from './pages/admin/Products';
import AdminShops from './pages/admin/Shops';

//user side
import Home from './pages/user/Home';
import Products from './pages/user/Products';
import ProductDetail from './pages/user/ProductDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Admin Side */}

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addshop" element={<AddShop />} />
          <Route path="/adminfloors" element={<AdminFloors />} />
          <Route path="/adminproducts" element={<AdminProducts />} />
          <Route path="/adminshops" element={<AdminShops />} />

          {/* User Side */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// const navigate= useNavigate(); 
// navigate('/addproduct');

export default App;
