import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === item.id && i.size === item.size);
      if (exists) {
        return prev.map((i) =>
          i.id === item.id && i.size === item.size
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter((i) => !(i.id === id && i.size === size))
    );
  };

  const updateQuantity = (id, size, type) => {
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id && i.size === size
          ? { ...i, qty: type === 'inc' ? i.qty + 1 : Math.max(i.qty - 1, 1) }
          : i
      )
    );
  };

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
