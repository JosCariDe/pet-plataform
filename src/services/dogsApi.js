// src/services/dogsApi.js
const DOG_API_KEY = import.meta.env.VITE_DOG_API_KEY || 'your-default-key';
const DOG_API_URL = 'https://api.thedogapi.com/v1';

export const getAllDogBreeds = async () => {
  try {
    const response = await fetch(`${DOG_API_URL}/breeds`, {
      headers: {
        'x-api-key': DOG_API_KEY
      }
    });
    if (!response.ok) {
      throw new Error('Error fetching dog breeds');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};

export const getDogImagesByBreed = async (breedId) => {
  try {
    const response = await fetch(`${DOG_API_URL}/images/search?breed_ids=${breedId}&limit=10`, {
      headers: {
        'x-api-key': DOG_API_KEY
      }
    });
    if (!response.ok) {
      throw new Error('Error fetching dog images');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};