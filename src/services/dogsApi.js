import { peticionesfetch } from "../utils/apiUtils";

// src/services/dogsApi.js
const DOG_API_KEY = import.meta.env.VITE_DOG_API_KEY || 'your-default-key';
const DOG_API_URL = 'https://api.thedogapi.com/v1';

export const getAllDogBreeds = async () => {
  
  const url = `${DOG_API_URL}/breeds`;
  const mensajeError = 'Error fetching dog breeds';

  return peticionesfetch(url, DOG_API_KEY, mensajeError);
};

export const getDogImagesByBreed = async (breedId) => {
 

  const url = `${DOG_API_URL}/images/search?breed_ids=${breedId}&limit=10`;
  const mensajeError = 'Error fetching dog images';

  return peticionesfetch(url,DOG_API_KEY, mensajeError);
};