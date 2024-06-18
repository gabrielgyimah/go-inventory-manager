import React, { createContext, useContext, useState } from "react";

/**
 * Interface representing an invitation to an business.
 * @interface InviteInterface
 */
export interface InviteInterface {
  /**
   * The id of the invite.
   * @type {string}
   */
  id: string;

  /**
   * The name of the business sending the invite.
   * @type {string}
   */
  businessName: string;

  /**
   * The URL of the business's image.
   * @type {string}
   */
  businessImageUrl: string;

  /**
   * The message included with the invite.
   * @type {string}
   */
  message: string;

  /**
   * The acceptance status of the invite.
   * @type {boolean}
   */
  isAccepted: boolean;
}

/**
 * Interface representing the context for managing invitations.
 * @interface InviteContextInterface
 */
export interface InviteContextInterface {
  /**
   * The list of invites.
   * @type {InviteInterface[]}
   */
  invites: InviteInterface[];

  /**
   * Function to update the list of invites.
   * @type {React.Dispatch<React.SetStateAction<InviteInterface[]>>}
   */
  setInvites: React.Dispatch<React.SetStateAction<InviteInterface[]>>;

  /**
   * Function to accept an invite.
   * @param {string} inviteId - The ID of the invite to accept.
   */
  acceptInvite: (inviteId: string) => void;

  /**
   * Function to decline an invite.
   * @param {string} inviteId - The ID of the invite to decline.
   */
  declineInvites: (inviteId: string) => void;

  /**
   * Function to retrieve the list of invites.
   */
  getInvites: () => void;

  /**
   * Indicates whether the users invites is currently being fetched or a an invite is being accepted or declined.
   * @type {boolean}
   */
  loading: boolean;

  /**
   * Error message if fetching/accepting or declining fails business fails.
   * @type {string | null}
   */
  error: string | null;
}

/**
 * The context for managing invitations, providing state and functions to handle invites.
 * 
 * This context includes:
 * - A list of invites.
 * - A function to update the list of invites.
 * - Functions to accept and decline invites.
 * - A function to retrieve invites.
 * 
 * @type {React.Context<InviteContextInterface | null>}
 */
const InvitesContext = createContext<InviteContextInterface | null>(null);


/**
 * Interface representing the structure of the Invites context provider
 * @interface InvitesContextProviderProps
 */
interface InvitesContextProviderProps {
  /**
   * @type {React.ReactNode} children - Children to the Invites provider
   */
  children: React.ReactNode;
}

const InvitesContextProvider = ({ children }: InvitesContextProviderProps) => {
  const [invites, setInvites] = useState<InviteInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getInvites = async () => {
    // Implementation for fetching invites
    // To be completed later
    // Will call an endpoint to get current users invites
  };

  const acceptInvite = async (inviteId: string) => {
    console.log(inviteId);
    // Implementation for accepting an invite
    // To be completed later
    // Will call an endpoint to accept the invite matching @param { inviteId }
  };

  const declineInvites = async (inviteId: string) => {
    console.log(inviteId);
    // Implementation for declining an invite
    // To be completed later
    // Will call an endpoint to retrieve the current user's business entity
  };

  const contextValues: InviteContextInterface = {
    invites,
    setInvites,
    getInvites,
    acceptInvite,
    declineInvites,
    loading,
    error
  };

  return (
    <InvitesContext.Provider value={contextValues}>
      {children}
    </InvitesContext.Provider>
  );
};

/**
 * Custom hook to use the Invites context.
 * @returns {InviteContextInterface} The invite context values.
 * @throws Will throw an error if used outside of InvitesContextProvider.
 */
const useInvites = (): InviteContextInterface => {
  const context = useContext(InvitesContext);
  if (!context) {
    throw new Error('useInvites must be used within an InvitesContextProvider');
  }

  return context;
};

export { InvitesContextProvider, useInvites };
