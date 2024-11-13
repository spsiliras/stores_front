import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import AddStore from "./Components/store/AddStore";
import UpdateStore from "./Components/store/UpdateStore";
import ViewEmployees from "./Components/employees/ViewEmployees";
import AddEmployee from "./Components/employees/AddEmployee";
import EditEmployee from "./Components/employees/EditEmployee";
import ViewProducts from "./Components/products/ViewProducts";
import AddProduct from "./Components/products/AddProduct";
import EditProduct from "./Components/products/EditProduct";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addstore" element={<AddStore />} />
          <Route exact path="/updatestore/:id" element={<UpdateStore />} />
          <Route
            exact
            path="/employees/:store_id"
            element={<ViewEmployees />}
          />
          <Route
            exact
            path="/addemployee/:store_id"
            element={<AddEmployee />}
          />
          <Route
            exact
            path="/editemployee/:store_id/:employee_id"
            element={<EditEmployee />}
          />
          <Route exact path="/products/:store_id" element={<ViewProducts />} />
          <Route exact path="/addproduct/:store_id" element={<AddProduct />} />
          <Route
            exact
            path="/editproduct/:store_id/:product_id"
            element={<EditProduct />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
