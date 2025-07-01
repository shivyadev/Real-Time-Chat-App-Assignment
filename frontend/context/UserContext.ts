import { createContext, useContext } from "react";

interface UserContextType {
  username: string;
  setUsername: (value: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};
