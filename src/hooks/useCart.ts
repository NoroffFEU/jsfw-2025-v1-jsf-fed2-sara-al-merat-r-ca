import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import type { CartContextType } from '../context/CartContext';


/*
  Custom hook to easily access the shopping cart state.
  Includes a safety check to ensure it is only used inside a <CartProvider>,
  preventing silent crashes if the context is missing.
 */
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
};
