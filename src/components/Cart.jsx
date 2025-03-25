import { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      nombre: "Cuatro Quesos",
      precio: 7500,
      cantidad: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    },
    {
      id: 2,
      nombre: "Pepperoni",
      precio: 6950,
      cantidad: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
    },
    {
      id: 3,
      nombre: "Vegana",
      precio: 6900,
      cantidad: 1,
      img: "https://s2-receitas.glbimg.com/sP3pVF5XK9N8N_0U2g-gdvPhkyw=/0x0:620x413/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/A/V/03IHABTT2ZNMQzXZD4mQ/pizza-vegetariana.jpg",
    },
  ]);

  const aumentarCantidad = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.cantidad > 0
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  // Calcular el total del carrito
  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.nombre} className="imgCart" />
                {item.nombre}
              </td>
              <td>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => disminuirCantidad(item.id)}
                >
                  -
                </button>
                <span className="mx-2">{item.cantidad}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={() => aumentarCantidad(item.id)}
                >
                  +
                </button>
              </td>
              <td>${item.precio.toLocaleString("es-ES")}</td>
              <td>${(item.precio * item.cantidad).toLocaleString("es-ES")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="mt-3 mb-5">
        Total a Pagar: ${total.toLocaleString("es-ES")}
      </h4>
    </div>
  );
};

export default Cart;
