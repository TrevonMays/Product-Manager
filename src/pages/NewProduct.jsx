import { useState } from 'react';
import axios from 'axios';
import { useOutletContext, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';

const NewProduct = () => {
  const [errors,setErrors] = useState([]);
  const navigate = useNavigate();
  const {baseUrl} = useOutletContext();
  const initialProduct = {
    title: '',
    price: '',
    description: ''
  }

  const insertProduct = (e, product) => {
    e.preventDefault();
    axios
      .post(baseUrl, product)
      .then(() => navigate('/products'))
      .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for(const key of Object.keys(errorResponse)){
          errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
      })
  };

  return (
    <div className="div">
      {errors.map((err,id) => <b key={id} style={{color:"purple"}}>{err}</b>)}
      <ProductForm formText={'Add Product'} submitHandler={insertProduct} initialProduct={initialProduct} />
    </div>
  );
};

export default NewProduct;