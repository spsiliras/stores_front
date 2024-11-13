import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  let navigate = useNavigate();

  const { store_id, product_id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    quantity: 0,
    price: 0,
  });

  const { name, quantity, price } = product;

  const onInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      `http://localhost:8080/products/edit/${product_id}`,
      product
    );
    navigate(`/products/${store_id}`);
  };

  const loadProducts = async () => {
    const result = await axios.get(
      `http://localhost:8080/products/${store_id}`
    );
    setProduct(result.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center m-4">Update Product Information</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter product name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Quantity" className="form-label">
            Quantity
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Price" className="form-label">
            Price
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter product price"
            name="price"
            value={price}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
        <Link
          className="btn btn-outline-danger mx-2"
          to={`/products/${store_id}`}
        >
          Cancel
        </Link>
      </form>
    </div>
  );
}
