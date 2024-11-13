import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/pages/Home";
import AddStore from "./Components/store/AddStore";
import UpdateStore from "./Components/store/UpdateStore";
import ViewEmployees from "./Components/employee/ViewEmployees";
import AddEmployee from "./Components/employee/AddEmployee";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
