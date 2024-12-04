import clienteAxios from "./axios";

export async function verIndiceCotizaciones() {
  try {
    const response = await clienteAxios.get('/promedio-ponderado/indiceCotizacion');
    return response.data;
  } catch (error) {
    console.error('Error fetching cotizaciones:', error);
    return [];
  }
}

export async function verCotizaciones() {
  try {
    const response = await clienteAxios.get('cotizacion/cotizaciones');
    return response.data;
  } catch (error) {
    console.error('Error fetching cotizaciones:', error);
    return [];
  }

}
