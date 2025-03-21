import { createContext } from "react";
import { useState } from "react";

export const UserAuthContext = createContext();

const UserAuth = ({ children }) => {
  const [login, setLogin] = useState(false);
  return (
    <UserAuthContext.Provider value={{ login, setLogin }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuth;
