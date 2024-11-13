import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ViewEmployees() {
  //const [employees, setEmployees] = useState();

  const { store_id } = useParams();

  const loadEmployees = async () => {
    const result = await axios.get(
      `http://localhost:8080/employees/${store_id}`
    );
    console.log(result.data);
    //setEmployees(result.data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return <div>View employees</div>;
}
