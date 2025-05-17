
import { Link } from 'react-router-dom';

const BreedCard = ({name, origin , description, image, id, petType}) => {



    return (
        <div className="bg-white rounded-lg shadow-md p-4">
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