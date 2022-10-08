import { createContext, useState, useEffect } from "react";


const Context = createContext();


const Provider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);


  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  // Funciones para el carro
  const addToCart = ({ id, price, name, img }) => {
    const productoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoIndex >= 0) {
      carrito[productoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

 
  return (
    <Context.Provider value={{ pizzas, carrito, setCarrito, addToCart}}>
      {children}
    </Context.Provider>
  );
};

// Export del provider
export { Provider };

// Export del context
export default Context;
