import { createContext } from "react";

// Credential context
export const CredentialContext = createContext({
  storedCredentials: {},
 
  setStoredCredentials: () => {},
});
