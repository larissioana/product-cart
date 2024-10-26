import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (item) => item.id === product.id && item.size === product.size
            );

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity: item.quantity + product.quantity }
                        : item
                );
            } else {
                return [...prevItems, product];
            }
        });
    };

    const removeFromCart = (id, size) => {
        setCartItems((prevItems) => prevItems.filter(item => !(item.id === id && item.size === size)));
    };

    const incrementQuantity = (id, size) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decrementQuantity = (id, size) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.size === size && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};
