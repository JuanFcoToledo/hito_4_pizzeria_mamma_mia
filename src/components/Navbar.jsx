import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-between">
        {/* Sección izquierda con Home, Login y Register */}
        <div>
          <span href="#">Pizzería Mamma Mia!</span>
          <button className="btn btn-outline-light mx-2">🍕 Home</button>
          {!token ? (
            <>
              <button className="btn btn-outline-light mx-2">🔐 Login</button>
              <button className="btn btn-outline-light mx-2">
                🔐 Register
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light mx-2">🔓 Profile</button>
              <button className="btn btn-danger mx-2">🔒 Logout</button>
            </>
          )}
        </div>

        {/* Sección derecha con el Total */}
        <div>
          <button className="btn btn-outline-light mx-2">
            🛒 Total: ${total}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
