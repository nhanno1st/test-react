
import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '../types';
import { toast } from 'react-toastify';

interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    clearCart: () => void;
}

const CartContext = createContext < CartContextType | undefined > (undefined);

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used inside CartProvider');
    return context;
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState < Product[] > ([]);
    const clearCart = () => setCartItems([]);
    const addToCart = (product: Product) => {
        setCartItems((prev) => [...prev, product]);
        toast.success(`${product.name} has been added to the cart!`)
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart , clearCart}}>
            {children}
        </CartContext.Provider>
    );
}
