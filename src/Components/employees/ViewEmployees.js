import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployees() {
  const [employees, setEmployees] = useState([]);

  const { store_id } = useParams();

  const loadEmployees = async () => {
    const result = await axios.get(
      `http://localhost:8080/employees/${store_id}`
    );
    console.log(result.data);
    setEmployees(result.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await axios.delete(
      `http://localhost:8080/employees/delete/${store_id}/${id}`
    );

    loadEmployees();
  };

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.salary}</td>
              <td>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/editemployee/${store_id}/${employee.employeeId}`}
                >
                  Edit Employee
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteEmployee(employee.employeeId)}
                >
                  Delete Employee
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-outline-primary" to={`/addemployee/${store_id}`}>
        Add Employee
      </Link>
    </div>
  );
}
