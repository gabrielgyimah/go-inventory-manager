import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";

/**
 * Interface representing a type of business.
 * @interface BusinessType
 */
export interface BusinessType {
  /**
   * The unique identifier for the business type.
   * @type {string}
   */
  id: string;

  /**
   * The title or name of the business type.
   * @type {string}
   */
  title: string;

  /**
   * A brief description of what the business type entails.
   * @type {string}
   */
  description: string;
}

/**
 * Interface representing a business entity.
 * @interface BusinessInterface
 */
export interface BusinessInterface {
  /**
   * The unique identifier for the business.
   * @type {string}
   */
  id: string;

  /**
   * The official name of the business.
   * @type {string}
   */
  name: string;

  /**
   * The full name of the contact person for the business.
   * @type {string}
   */
  contactPersonFullName: string;

  /**
   * The registered name of the business.
   * @type {string}
   */
  businessName: string;

  /**
   * The email address associated with the business.
   * @type {string}
   */
  email: string;

  /**
   * The industry or category that the business falls under.
   * @type {BusinessType}
   */
  businessType: BusinessType;

  /**
   * The country where the business operates.
   * @type {string}
   */
  country: string;

  /**
   * The contact phone number for the business.
   * @type {string}
   */
  contactPhone: string;

  /**
   * The URL of the business's logo.
   * @type {string}
   */
  logoUrl: string;
}

/**
 * Interface representing the context for managing a business entity.
 * @interface BusinessContextInterface
 */
export interface BusinessContextInterface {
  /**
   * The business entity.
   * @type {BusinessInterface | null}
   */
  business: BusinessInterface | null;

  /**
   * Function to update the business entity.
   * @type {Dispatch<SetStateAction<BusinessInterface | null>>}
   */
  setBusiness: Dispatch<SetStateAction<BusinessInterface | null>>;

  /**
   * Function to retrieve the business entity.
   * @returns {BusinessInterface | null} The current business entity.
   */
  getBusiness: () => BusinessInterface | null;

  /**
   * Indicates whether the categories are currently being fetched.
   * @type {boolean}
   */
    loading: boolean;

  /**
   * Error message if fetching categories fails.
   * @type {string | null}
   */
  error: string | null;
}

/**
 * The context for managing business data.
 * @type {React.Context<BusinessContextInterface | null>}
 */
const BusinessContext = createContext<BusinessContextInterface | null>(null);

/**
 * Props for the BusinessContextProvider component.
 * @interface BusinessContextProviderProps
 */
interface BusinessContextProviderProps {
  /**
   * The children components that will have access to the context.
   * @type {React.ReactNode}
   */
  children: ReactNode;
}

/**
 * The provider component for the BusinessContext.
 * @param {BusinessContextProviderProps} props - The props for the provider component.
 * @returns {JSX.Element} The provider component with the context value.
 */
const BusinessContextProvider = ({ children }: BusinessContextProviderProps): JSX.Element => {
  const [business, setBusiness] = useState<BusinessInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Utility function to get the current user's business entity.
   * @returns {BusinessInterface | null} The current business entity.
   */
  const getBusiness = (): BusinessInterface | null => {
    // To be completed later
    // Will call an endpoint to retrieve the current user's business entity
    return business;
  };

  const contextValue: BusinessContextInterface = {
    business,
    setBusiness,
    getBusiness,
    loading,
    error
  };

  return (
    <BusinessContext.Provider value={contextValue}>
      {children}
    </BusinessContext.Provider>
  );
};

/**
 * Custom hook to use the BusinessContext.
 * @returns {BusinessContextInterface} The business context values.
 * @throws Will throw an error if used outside of BusinessContextProvider.
 */
const useBusiness = (): BusinessContextInterface => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessContextProvider');
  }
  return context;
};

export { BusinessContextProvider, useBusiness };
