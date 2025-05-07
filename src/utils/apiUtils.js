
export const peticionesfetch = async (url,api_key, mensajeError) => {
  try {
    const response = await fetch(`${url}`, {
      headers: {
        'x-api-key': api_key
      }
    });
    
    if (!response.ok) {
      throw new Error(`${mensajeError}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
  }
};