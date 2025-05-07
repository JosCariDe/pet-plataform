import { useEffect, useState } from "react";
import BreedCard from "../components/BreedCard/BreedCard";
import { getAllCatBreeds } from "../services/catsApi";

const CatsPage = () =>{

    const [searchTerm, setSearchTerm] = useState('');
    const [breeds, setBreeds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Efecto para cargar los datos al montar el componente
    useEffect(() => {
        const fetchBreeds = async () => {
            try {
                setLoading(true);
                const data = await getAllCatBreeds();
                setBreeds(data);
                setError(null);
            } catch (err) {
                setError('Error al cargar las razas de gatos');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBreeds();
    }, []); // Array vacío significa que se ejecuta solo una vez al montar    
    console.log(breeds);
    const filteredBreeds = breeds.filter(breed => 
        breed.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        );
      }

      if (error) {
        return (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
            <p>{error}</p>
          </div>
        );
      }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Razas de Gatos</h1>
            
            {/* Barra de búsqueda */}
            <div className="mb-6">
                <input type="text" 
                placeholder="Buscar razas..."
                className="w-full p-2 border border-gray-300 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}/>
            </div>

            {/* Lista de Razas */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    filteredBreeds.map(breed => 
                        <BreedCard
                            key={breed.key}
                            name={breed.name}
                            origin={breed.origin || 'Desconocido'}
                            description={breed.description || 'Sin descripcion disponible'}
                            image={breed.image?.url}
                        />
                    )
                }
            </div>

                {/* MEnsaje si no hay resuultados */}
            
            {
                filteredBreeds.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">
                        No se encontraron resultados que coincidan con "{searchTerm}"
                    </p>
                )
            }

        </div>
    )
}

export default CatsPage;