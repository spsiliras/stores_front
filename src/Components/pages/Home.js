import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [stores, setStores] = useState([]);

  //const { storeId } = useParams();

  useEffect(() => {
    loadStores();
  }, []);

  const loadStores = async () => {
    const result = await axios.get("http://localhost:8080/stores");
    //console.log(result.data);
    setStores(result.data);
  };

  const deleteStore = async (id) => {
    await axios.delete(`http://localhost:8080/store/${id}`);

    loadStores();
  };

  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Store Name</th>
            <th scope="col">Owner</th>
            <th scope="col">Location</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, index) => (
            <tr>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{store.name}</td>
              <td>{store.owner}</td>
              <td>{store.location}</td>
              <td>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/updatestore/${store.storeId}`}
                >
                  Update Store
                </Link>
                <Link
                  className="btn btn-primary mx-2"
                  to={`/employees/${store.storeId}`}
                >
                  View Employees
                </Link>
                <Link
                  className="btn btn-outline-primary mx-2"
                  to={`/products/${store.storeId}`}
                >
                  View Products
                </Link>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteStore(store.storeId)}
                >
                  Delete Store
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
