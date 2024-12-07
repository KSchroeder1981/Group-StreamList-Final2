import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  cart: any[];
  favorites: any[];
  addToCart: (movie: any) => void;
  addToFavorites: (movie: any) => void;
  proceedToCheckout: () => void; // Simulates checkout
}

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  const addToCart = (movie: any) => {
    if (!cart.find((item) => item.id === movie.id)) {
      setCart((prevCart) => [...prevCart, movie]);
    }
  };

  const addToFavorites = (movie: any) => {
    if (!favorites.find((item) => item.id === movie.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  const proceedToCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert(`Checkout successful! You purchased ${cart.length} items.`);
      setCart([]); // Clear the cart after checkout
    }
  };

  return (
    <AppContext.Provider
      value={{ cart, favorites, addToCart, addToFavorites, proceedToCheckout }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
