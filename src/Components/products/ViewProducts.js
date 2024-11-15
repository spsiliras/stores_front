import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewProducts() {
  const [products, setProducts] = useState([]);

  const { store_id } = useParams();

  const loadProducts = async () => {
    const result = await axios.get(
      `http://localhost:8080/products/${store_id}`
    );
    console.log(result.data);
    setProducts(result.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(
      `http://localhost:8080/products/delete/${store_id}/${id}`
    );

    loadProducts();
  };

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{product.name}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/editproduct/${store_id}/${product.productId}`}
                >
                  Edit Product
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteProduct(product.productId)}
                >
                  Delete Product
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-outline-primary" to={`/addproduct/${store_id}`}>
        Add Product
      </Link>
    </div>
  );
}
