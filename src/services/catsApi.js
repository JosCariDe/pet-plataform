// src/services/catsApi.js

import { peticionesfetch } from "../utils/apiUtils";

// 1. Obtenemos la clave de API desde las variables de entorno
const CAT_API_KEY = import.meta.env.VITE_CAT_API_KEY || 'your-default-key';
// 2. Definimos la URL base de la API
const CAT_API_URL = 'https://api.thecatapi.com/v1';

// 3. Función para obtener todas las razas de gatos
export const getAllCatBreeds = async () => {

    const url = `${CAT_API_URL}/breeds`;
    const mensajeError = "Error fetching cat breed";
    
    return peticionesfetch(url,CAT_API_KEY,mensajeError);

};

// 9. Función para obtener imágenes de una raza específica
export const getCatImagesByBreed = async (breedId) => {

    const url = `${CAT_API_URL}/images/search?breed_ids=${breedId}&limit=10`;
    const mensajeError = 'Error fetching cat images';
    return peticionesfetch(url,CAT_API_KEY,mensajeError);
    
};