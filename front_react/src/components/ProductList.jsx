import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/productService';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  // console.log (products[0]["category"]["name"])
  return (
    <div className="container mt-5">
      <h2>Product List</h2>
      <ul className="list-group">
        {products.map(product => (
          <li key={product._id} className="list-group-item">
            <strong>{product.name}</strong> - ${product.price}
            <span className="badge bg-secondary ms-2">
              {products[0]["category"]["name"]}</span> 
              </li>
        ))} </ul>
    </div>);
}
export default ProductList;