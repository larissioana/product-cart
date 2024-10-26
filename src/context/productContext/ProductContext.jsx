import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(() => {
        const savedProduct = localStorage.getItem("selectedProduct");
        return savedProduct ? JSON.parse(savedProduct) : {};
    });

    const updateProduct = (product) => {
        setSelectedProduct(product);
        localStorage.setItem("selectedProduct", JSON.stringify(product));
    };

    const clearSelectedProduct = () => {
        setSelectedProduct({});
        localStorage.removeItem("selectedProduct");
    };

    useEffect(() => {
        const savedProduct = localStorage.getItem("selectedProduct");
        if (savedProduct) {
            setSelectedProduct(JSON.parse(savedProduct));
        }
    }, []);

    return (
        <ProductContext.Provider value={{ selectedProduct, updateProduct, clearSelectedProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
