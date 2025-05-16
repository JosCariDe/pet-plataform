import { useState } from 'react';

const BreedFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    temperament: '',
    origin: ''
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-3">Filtros</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="searchTerm"
            name="searchTerm"
            placeholder="Buscar por nombre..."
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.searchTerm}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label htmlFor="temperament" className="block text-sm font-medium text-gray-700 mb-1">
            Temperamento
          </label>
          <select
            id="temperament"
            name="temperament"
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.temperament}
            onChange={handleInputChange}
          >
            <option value="">Cualquiera</option>
            <option value="Active">Activo</option>
            <option value="Energetic">Energetico</option>
            <option value="Independent">Independente</option>
            <option value="Intelligent">Intelligente</option>
            <option value="Gentle">Gentil</option>
            <option value="Social">Social</option>

            <option value="Playful">jugueton</option>
            <option value="Affectionate">Cariñoso</option>
            <option value="Sensitive">Sensible</option>
            <option value="Interactive">Interactivo</option>
            <option value="Lively">Animado</option>
            <option value="Curious">Curioso</option>
            <option value="Easy Going">Fácil de llevar</option>
            <option value="Calm">Calmado</option>

          </select>
        </div>
        
        <div>
          <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
            Origen
          </label>
          <input
            type="text"
            id="origin"
            name="origin"
            placeholder="Ej: Estados Unidos, Reino Unido..."
            className="w-full p-2 border border-gray-300 rounded"
            value={filters.origin}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default BreedFilters;