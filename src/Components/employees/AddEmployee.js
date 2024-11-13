import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AddEmployee() {
  let navigate = useNavigate();

  const { store_id } = useParams();

  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    salary: 0,
  });

  const { name, address, salary } = employee;

  const onInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      `http://localhost:8080/employees/add/${store_id}`,
      employee
    );
    navigate(`/employees/${store_id}`);
  };

  return (
    <div className="container">
      <h2 className="text-center m-4">Add New Employee</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter employee name"
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Owner" className="form-label">
            Address
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter address name"
            name="address"
            value={address}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Location" className="form-label">
            Salary
          </label>
          <input
            type={"text"}
            className="form-control"
            placeholder="Enter salary amount"
            name="salary"
            value={salary}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Submit
        </button>
        <Link
          className="btn btn-outline-danger mx-2"
          to={`/employees/${store_id}`}
        >
          Cancel
        </Link>
      </form>
    </div>
  );
}
