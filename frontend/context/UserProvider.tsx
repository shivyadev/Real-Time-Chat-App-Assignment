import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [username, setUsername] = useState<string>("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
