import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";

/**
 * Interface representing a type of Organization.
 * @interface OrganizationType
 */
export interface OrganizationType {
  /**
   * The unique identifier for the Organization type.
   * @type {string}
   */
  id: string;

  /**
   * The title or name of the Organization type.
   * @type {string}
   */
  title: string;

  /**
   * A brief description of what the Organization type entails.
   * @type {string}
   */
  description: string;
}

/**
 * Interface representing a Organization entity.
 * @interface OrganizationInterface
 */
export interface OrganizationInterface {
  /**
   * The unique identifier for the Organization.
   * @type {string}
   */
  id: string;

  /**
   * The official name of the Organization.
   * @type {string}
   */
  name: string;

  /**
   * The full name of the contact person for the Organization.
   * @type {string}
   */
  contactPersonFullName: string;

  /**
   * The registered name of the Organization.
   * @type {string}
   */
  OrganizationName: string;

  /**
   * The email address associated with the Organization.
   * @type {string}
   */
  email: string;

  /**
   * The industry or category that the Organization falls under.
   * @type {OrganizationType}
   */
  OrganizationType: OrganizationType;

  /**
   * The country where the Organization operates.
   * @type {string}
   */
  country: string;

  /**
   * The contact phone number for the Organization.
   * @type {string}
   */
  contactPhone: string;

  /**
   * The URL of the Organization's logo.
   * @type {string}
   */
  logoUrl: string;
}

/**
 * Interface representing the context for managing a Organization entity.
 * @interface OrganizationContextInterface
 */
export interface OrganizationContextInterface {
  /**
   * The Organization entity.
   * @type {OrganizationInterface | null}
   */
  organization: OrganizationInterface | null;

  /**
   * Function to update the Organization entity.
   * @type {Dispatch<SetStateAction<OrganizationInterface | null>>}
   */
  setOrganization: Dispatch<SetStateAction<OrganizationInterface | null>>;

  /**
   * Function to retrieve the Organization entity.
   * @returns {OrganizationInterface | null} The current Organization entity.
   */
  getOrganization: () => OrganizationInterface | null;

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
 * The context for managing Organization data.
 * @type {React.Context<OrganizationContextInterface | null>}
 */
const OrganizationContext = createContext<OrganizationContextInterface | null>(null);

/**
 * Props for the OrganizationContextProvider component.
 * @interface OrganizationContextProviderProps
 */
interface OrganizationContextProviderProps {
  /**
   * The children components that will have access to the context.
   * @type {React.ReactNode}
   */
  children: ReactNode;
}

/**
 * The provider component for the OrganizationContext.
 * @param {OrganizationContextProviderProps} props - The props for the provider component.
 * @returns {JSX.Element} The provider component with the context value.
 */
const OrganizationContextProvider = ({ children }: OrganizationContextProviderProps): JSX.Element => {
  const [organization, setOrganization] = useState<OrganizationInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Utility function to get the current user's Organization or organization entity.
   * @returns {OrganizationInterface | null} The current Organization entity.
   */
  const getOrganization = (): OrganizationInterface | null => {
    // To be completed later
    // Will call an endpoint to retrieve the current user's Organization entity
    return organization;
  };

  const contextValue: OrganizationContextInterface = {
    organization,
    setOrganization,
    getOrganization,
    loading,
    error
  };

  return (
    <OrganizationContext.Provider value={contextValue}>
      {children}
    </OrganizationContext.Provider>
  );
};

/**
 * Custom hook to use the OrganizationContext.
 * @returns {OrganizationContextInterface} The Organization context values.
 * @throws Will throw an error if used outside of OrganizationContextProvider.
 */
const useOrganization = (): OrganizationContextInterface => {
  const context = useContext(OrganizationContext);
  if (!context) {
    throw new Error('useOrganization must be used within a OrganizationContextProvider');
  }
  return context;
};

export { OrganizationContextProvider, useOrganization };
