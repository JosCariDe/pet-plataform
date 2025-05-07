

const BreedCard = (props) => {

    const {name, origin , description, image} = props;


    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            {image && (
                <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-4"/>
            )}
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">Origen: {origin}</p>
            <p className="mt-2">{description}</p>
        </div>
    )
}

export default BreedCard;