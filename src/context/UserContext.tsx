import { createContext, useState, type ReactNode } from "react";
import type { UserContextType } from "../types/User";

// contexto user
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

// component provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
