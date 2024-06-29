import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ProductInterface {
  id: string;
  name: string;
  units: string;
  price: number;
  productImageUrl: string;
  categoryId: string; // Each product should belong to a category
}

export interface ProductContextProps {
  products: ProductInterface[];
  setProducts: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
  addProduct: (product: ProductInterface) => void;
  removeProduct: (id: string) => void;
  updateProduct: (product: ProductInterface) => void;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);

  const addProduct = (product: ProductInterface) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const removeProduct = (id: string) => {
    setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
  };

  const updateProduct = (updatedProduct: ProductInterface) => {
    setProducts((prevProducts) =>
      prevProducts.map(product => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, addProduct, removeProduct, updateProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};
