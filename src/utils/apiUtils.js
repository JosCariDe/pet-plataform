
export const peticionesfetch = async (url,api_key, mensajeError) => {
  try {
    // 4. Hacemos una solicitud GET a la API
    const response = await fetch(`${url}`, {
      headers: {
        // 5. Incluimos la clave API en los encabezados
        'x-api-key': api_key
      }
    });
    
    // 6. Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`${mensajeError}`);
    }
    
    // 7. Convertimos la respuesta a formato JSON y la devolvemos
    return await response.json();
  } catch (error) {
    // 8. Manejamos cualquier error
    console.error('Error:', error);
    return []; // Devolvemos un array vacío en caso de error
  }
};