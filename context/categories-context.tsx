import React, { SetStateAction, createContext, useContext, useState, useEffect } from "react";

/**
 * Interface representing a product category.
 * @interface Category
 */
export interface Category {
  /**
   * The unique identifier for a category.
   * @type {string}
   */
  id: string;

  /**
   * The title of the category.
   * @type {string}
   */
  title: string;

  /**
   * A brief explanation of what type of products fit best under this category.
   * @type {string}
   */
  description: string;

  /**
   * The total number of products that fall under this category.
   * @type {number}
   */
  productsCount: number;

  /**
   * The name of the icon representing the category.
   * Can be one of 'electricals', 'vegetables', 'fizzy-drinks', 'tubers', 'books', 
   * 'cosmetics', 'bottled-water', 'sachet-water', 'beer', 'dry-gin', 'electronics', 
   * 'furniture', 'clothing', 'toys', 'sports', 'accessories', 'tools', 'hardware', 
   * 'software', 'groceries', 'dairy', 'meat', 'seafood', 'bakery', 'frozen-foods',
   * 'pet-supplies', 'office-supplies', 'cleaning-supplies', 'personal-care', 'health', 
   * 'beauty', 'automotive', 'gardening', 'outdoor', 'home-decor', 'appliances', 
   * 'jewelry', 'watches', 'baby-products', 'musical-instruments', 'stationery',
   * 'pharmaceuticals', 'medical-equipment'.
   * 
   * @type {'electricals' | 'vegetables' | 'fizzy-drinks' | 'tubers' | 'books' | 'cosmetics'
   *        | 'bottled-water' | 'sachet-water' | 'beer' | 'dry-gin' | 'electronics' | 'furniture'
   *        | 'clothing' | 'toys' | 'sports' | 'accessories' | 'tools' | 'hardware' | 'software'
   *        | 'groceries' | 'dairy' | 'meat' | 'seafood' | 'bakery' | 'frozen-foods' | 'pet-supplies'
   *        | 'office-supplies' | 'cleaning-supplies' | 'personal-care' | 'health' | 'beauty'
   *        | 'automotive' | 'gardening' | 'outdoor' | 'home-decor' | 'appliances' | 'jewelry'
   *        | 'watches' | 'baby-products' | 'musical-instruments' | 'stationery' | 'pharmaceuticals'
   *        | 'medical-equipment'}
   */
  iconName: 'electricals' | 'vegetables' | 'fizzy-drinks' | 'tubers' | 'books' | 'cosmetics' 
            | 'bottled-water' | 'sachet-water' | 'beer' | 'dry-gin' | 'electronics' | 'furniture'
            | 'clothing' | 'toys' | 'sports' | 'accessories' | 'tools' | 'hardware' | 'software'
            | 'groceries' | 'dairy' | 'meat' | 'seafood' | 'bakery' | 'frozen-foods' | 'pet-supplies'
            | 'office-supplies' | 'cleaning-supplies' | 'personal-care' | 'health' | 'beauty' | 'automotive'
            | 'gardening' | 'outdoor' | 'home-decor' | 'appliances' | 'jewelry' | 'watches' | 'baby-products'
            | 'musical-instruments' | 'stationery' | 'pharmaceuticals' | 'medical-equipment';
}

/**
 * Interface representing the context for managing categories.
 * @interface CategoryContextInterface
 */
export interface CategoryContextInterface {
  /**
   * The list of all categories fetched from the database.
   * @type {Category[]}
   */
  categories: Category[];

  /**
   * Function to set the list of categories.
   * @type {React.Dispatch<SetStateAction<Category[]>>}
   */
  setCategories: React.Dispatch<SetStateAction<Category[]>>;

  /**
   * Function to fetch all categories from the database.
   * @type {() => Promise<void>}
   */
  getCategories: () => Promise<void>;

  /**
   * Indicates whether the business is currently being fetched.
   * @type {boolean}
   */
  loading: boolean;

  /**
   * Error message if fetching business fails.
   * @type {string | null}
   */
  error: string | null;
}

/**
 * The context for managing category data.
 * @type {React.Context<CategoryContextInterface | null>}
 */
const CategoryContext = createContext<CategoryContextInterface | null>(null);

/**
 * Props for the CategoryContextProvider component.
 * @interface CategoryContextProviderProps
 */
export interface CategoryContextProviderProps {
  /**
   * The children components that will have access to the context.
   * @type {React.ReactNode}
   */
  children: React.ReactNode;
}

/**
 * The provider component for the CategoryContext.
 * @param {CategoryContextProviderProps} props - The props for the provider component.
 * @returns {JSX.Element} The provider component with the context value.
 */
const CategoryContextProvider = ({ children }: CategoryContextProviderProps): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Utility function to fetch all categories from the database.
   * @returns {Promise<void>} A promise that resolves when the categories are fetched.
   */
  const getCategories = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
    // To be completed later
    // Will call an endpoint to retrieve the current user's business entity
      const response = await fetch('/api/categories');
      const data: Category[] = await response.json();
      setCategories(data);
    } catch (err) {
      setError('Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const contextValues: CategoryContextInterface = {
    categories,
    setCategories,
    getCategories,
    loading,
    error
  };

  return (
    <CategoryContext.Provider value={contextValues}>
      {children}
    </CategoryContext.Provider>
  );
};

/**
 * Custom hook to use the CategoryContext.
 * @returns {CategoryContextInterface} The category context values.
 * @throws Will throw an error if used outside of CategoryContextProvider.
 */
const useCategory = (): CategoryContextInterface => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryContextProvider');
  }
  return context;
};

export { CategoryContextProvider, useCategory };
