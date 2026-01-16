import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const totalItems = cart.length;

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
