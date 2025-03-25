import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.email || !formData.password) {
      setMessage("Debe completar ambos campos.");
      setMessageType("danger");
      return;
    }

    if (formData.password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      setMessageType("danger");
      return;
    }

    // Simulación de login exitoso
    setMessage("Inicio de sesión exitoso.");
    setMessageType("success");
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña:</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {message && (
          <div className={`alert alert-${messageType}`} role="alert">
            {message}
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
