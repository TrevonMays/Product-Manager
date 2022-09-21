import './slate.css';
import { Navigate, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Products from './components/Product';
import AllProducts from './pages/AllProduct';
import ShowProduct from './pages/ShowProduct';
import NewProduct from './pages/NewProduct';
import EditProduct from './pages/EditProduct';

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <Routes>
          <Route path={'/'} element={<Navigate to="/products" />} />
          <Route path={'/products'} element={<Products />}>
            <Route index element={<AllProducts />} />
            <Route path=":id" element={<ShowProduct />} />
            <Route path="new" element={<NewProduct />} />
            <Route path=":id/edit" element={<EditProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;