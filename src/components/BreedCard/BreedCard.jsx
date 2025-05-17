
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext/FavoritesContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const BreedCard = ({name, origin , description, image, id, petType}) => {

    const { isFavorite, toggleFavorite } = useContext(FavoritesContext);
    const favorito = isFavorite(id);

    return (
        <div className="bg-white rounded-lg shadow-md p-4 relative flex flex-col justify-between">
                                          {/* Botón de favorito */}
                <button
                  onClick={() => toggleFavorite(id, petType === "gatos" ? "gato" : "perro")}
                  className="absolute top-2 right-2 text-red-500 text-xl"
                  title={favorito ? "Quitar de favoritos" : "Agregar a favoritos"}
                >
                  {favorito ? <FaHeart /> : <FaRegHeart />}
                </button>
            {image && (
                <img src={image} alt={name} className="w-full h-48 object-contain rounded mb-4"/>
            )}
            <div>
                <div>
                    <h3 className="text-lg font-semibold">{name}</h3>
                    <p className="text-gray-600">Origen: {origin}</p>
                    <p className="mt-2">{description}</p>
                </div>

                <Link
                    to={`/${petType}/${id}`}
                    className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 text-center block"
                    >
                    Ver detalles
                </Link>
            </div>
            
        </div>
    )
}

export default BreedCard;