import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="http://localhost:3000/">
            Super Stores Management Application
          </a>

          <Link class="btn btn-outline-light" to="/addstore">
            Add New Store
          </Link>
        </div>
      </nav>
    </div>
  );
}
