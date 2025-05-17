import { createContext, useContext, useMemo } from "react";
import { UserContext } from "../UserContext/UserContext";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  // Memoizamos para evitar recalcular favoritos si el usuario no cambia
  const favorites = useMemo(() => currentUser?.mascotasFavoritas || [], [currentUser]);

  return (
    <FavoritesContext.Provider value={{ favorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
