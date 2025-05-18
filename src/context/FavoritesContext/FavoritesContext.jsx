import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../UserContext/UserContext";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);

  const [favorites, setFavorites] = useState([]);

  // Sincroniza favoritos cada vez que cambia el usuario
  useEffect(() => {
    if (currentUser) {
      setFavorites(currentUser.mascotasFavoritas || []);
    }
  }, [currentUser]);

  const isFavorite = (idMascota) => {
    return favorites.some((fav) => fav.idMascota === idMascota);
  };

  const addFavorite = (idMascota, tipoMascota) => {
    if (!isFavorite(idMascota)) {
      setFavorites((prev) => [...prev, { idMascota, tipoMascota }]);
    }
  };

  const removeFavorite = (idMascota) => {
    setFavorites((prev) => prev.filter((fav) => fav.idMascota !== idMascota));
  };

  const toggleFavorite = (idMascota, tipoMascota) => {
    if (isFavorite(idMascota)) {
      removeFavorite(idMascota);
    } else {
      addFavorite(idMascota, tipoMascota);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
