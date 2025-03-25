import React from "react";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" />
      <div className="card-body">
        <h2 className="card-titulo">{name.toUpperCase()}</h2>
        <div className="separacion"></div>
        <p className="card-ingredientes-titulo">
          <strong>Ingredientes:</strong>
        </p>
        {/* <p className="card-ingredientes">🍕 {ingredientes.join(", ")}</p> */}
        <ul className="card-ingredientes lista-ingredientes">
          {ingredients?.map((ingrediente, index) => (
            <li key={index}>
              {index == 0 ? "🍕 " : ""}
              {ingrediente}
              {index < ingredients.length - 1 ? ", " : ""}
            </li>
          ))}
        </ul>
        <div className="separacion"></div>
        <p className="card-precio">${price.toLocaleString("es-ES")} </p>
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <button
              style={{ color: "black" }}
              className="btn btn-outline-light mx-2"
            >
              Ver más 👀
            </button>
          </div>
          <div>
            <button className="btn btn-dark mx-2">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;
