import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "@/data/user-mock.data";

interface UserContextProps {
  //state
  authStatus: "checking" | "authtenticated" | "not-authenticated";
  user: User | null;

  //metodos
  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, serUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    console.log(userId);

    return true;
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <UserContext
      value={{
        authStatus: "checking",
        user: null,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
