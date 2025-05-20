import { createContext, useState } from "react";
import users from "../../data/users";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //Falta editar este useState Para mantener seleccion incluso cuando recarga.
  const [currentUserId, setCurrentUserId] = useState(users[0].id);

  const currentUser = users.find((user) => user.id === currentUserId);

  return (
    <UserContext.Provider value={{ users, currentUser, setCurrentUserId }}>
      {children}
    </UserContext.Provider>
  );
};
