import React from "react";
import { useState, useEffect } from "react";

function Pizza() {
  const [pizza, setPizza] = useState([]);

  const url = "http://localhost:3000/api/pizzas/p001";

  // Función para obtener los datos
  const getData = async () => {
    try {
      const response = await fetch(url);
      //console.log(response);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      setPizza(data);
      //console.log(data);
    } catch (error) {
      console.error("Error obteniendo los datos:", error);
    }
  };

  // Efecto para llamar a la API cuando el componente se monta
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pizza-page">
      <h1 className="pizza-titulo">{pizza.name}</h1>
      <div className="pizza-contenido">
        <img src={pizza.img} alt={pizza.name} className="pizza-img" />
        <div className="pizza-info">
          <h2>Descripción</h2>
          <p>{pizza.desc}</p>
          <h2>Ingredientes</h2>
          <ul className="ingredientes-list">
            {pizza.ingredients?.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
          <h2>Precio</h2>
          <p>${pizza.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
