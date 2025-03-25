import React from "react";
import { useState, useEffect } from "react";
import CardPizza from "./CardPizza";
import Header from "./Header";

function Home() {
  // Estado
  const [pizzas, setPizzas] = useState([]);

  // URL de la API
  const url = "http://localhost:3000/api/pizzas"; // Cambio de puerto por bloqueo en navegador.

  // Función para obtener los datos
  const getData = async () => {
    try {
      const response = await fetch(url);
      //console.log(response);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      setPizzas(data);
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
    <main className="home">
      <Header />

      <div className="pizza-listado">
        {pizzas.map((pizza, index) => (
          <CardPizza key={index} {...pizza} />
        ))}
      </div>
    </main>
  );
}

export default Home;
