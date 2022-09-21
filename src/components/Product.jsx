import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const baseUrl = 'http://localhost:8000/api/products';
  const [ product, setProducts] = useState([]);
  useEffect(() => {
    axios.get(baseUrl)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  });

  return (
    <fieldset>
      <legend>Products</legend>
      <Outlet context={{ product, setProducts, baseUrl }} />
    </fieldset>
  )
}

export default Products;