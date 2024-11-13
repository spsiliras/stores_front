import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddStore() {
  let navigate = useNavigate();

  const [store, setStore] = useState({
    name: "",
    owner: "",
    location: "",
  });

  const { name, owner, location } = store;

  const onInputChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/store", store);
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">Register New Store</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter store name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Owner" className="form-label">
            Owner
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter owner name"
            name="owner"
            value={owner}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Location" className="form-label">
            Location
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter store location"
            name="location"
            value={location}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
        <Link className="btn btn-outline-danger mx-2" to="/">
          Cancel
        </Link>
      </form>
    </div>
  );
}
