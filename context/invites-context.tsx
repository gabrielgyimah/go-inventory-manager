import React, { createContext, useContext, useState } from "react";

/**
 * Interface representing an invitation to an organization.
 * @interface InviteInterface
 */
export interface InviteInterface {
  /**
   * The id of the invite.
   * @type {string}
   */
  id: string;

  /**
   * The name of the organization sending the invite.
   * @type {string}
   */
  organizationName: string;

  /**
   * The URL of the organization's image.
   * @type {string}
   */
  organizationImageUrl: string;

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

  const getInvites = async () => {
    // Implementation for fetching invites
  };

  const acceptInvite = async (inviteId: string) => {
    console.log(inviteId);
    // Implementation for accepting an invite
  };

  const declineInvites = async (inviteId: string) => {
    console.log(inviteId);
    // Implementation for declining an invite
  };

  const contextValues: InviteContextInterface = {
    invites,
    setInvites,
    getInvites,
    acceptInvite,
    declineInvites
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
