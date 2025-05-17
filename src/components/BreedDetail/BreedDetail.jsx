// src/components/BreedDetail/BreedDetail.jsx
import { useState, useEffect } from 'react';
import { getCatImagesByBreed } from '../../services/catsApi';
import { getDogImagesByBreed } from '../../services/dogsApi';

const BreedDetail = ({ breed, petType }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        let data;
        
        if (petType === 'cat') {
          data = await getCatImagesByBreed(breed.id);
        } else {
          data = await getDogImagesByBreed(breed.id);
        }
        
        setImages(data);
        setError(null);
      } catch (err) {
        setError(`Error al cargar imágenes para ${breed.name}.`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    if (breed && breed.id) {
      fetchImages();
    }
  }, [breed, petType]);
  
  if (!breed) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
                <span className="visually-hidden">Loading...</span>
            </div>
          )
          : images.length > 0 ? (
            <img 
              src={images[0].url} 
              alt={breed.name}
              className="w-full h-64 object-contain rounded-lg" 
            />
          ) : (
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">No hay imágenes disponibles</p>
            </div>
          )}
          
          {/* Galería de miniaturas */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {images.slice(0, 4).map((img, index) => (
              <img 
                key={index}
                src={img.url} 
                alt={`${breed.name} ${index + 1}`}
                className="w-full h-16 object-contain rounded cursor-pointer" 
              />
            ))}
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-2">{breed.name}</h1>
          <p className="text-gray-600 mb-4">Origen: {breed.origin || 'Desconocido'}</p>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p>{breed.description || 'No hay descripción disponible.'}</p>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Temperamento</h3>
            <p>{breed.temperament || 'No hay información de temperamento disponible.'}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-md font-semibold mb-1">Esperanza de vida</h3>
              <p>{breed.life_span || 'N/A'}</p>
            </div>
            
            <div>
              <h3 className="text-md font-semibold mb-1">Peso</h3>
              <p>{breed.weight?.metric || 'N/A'} kg</p>
            </div>
            
            {petType === 'cat' && (
              <>
                <div>
                  <h3 className="text-md font-semibold mb-1">Nivel de afecto</h3>
                  <p>{breed.affection_level ? `${breed.affection_level}/5` : 'N/A'}</p>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold mb-1">Adaptabilidad</h3>
                  <p>{breed.adaptability ? `${breed.adaptability}/5` : 'N/A'}</p>
                </div>
              </>
            )}
            
            {petType === 'dog' && (
              <>
                <div>
                  <h3 className="text-md font-semibold mb-1">Grupo de raza</h3>
                  <p>{breed.breed_group || 'N/A'}</p>
                </div>
                
                <div>
                  <h3 className="text-md font-semibold mb-1">Criado para</h3>
                  <p>{breed.bred_for || 'N/A'}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDetail;