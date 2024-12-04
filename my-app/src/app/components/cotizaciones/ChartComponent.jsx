import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts'; // Asegúrate de tener esta librería instalada

const ChartComponent = ({ cotizaciones, selectedIndices }) => {
  const chartContainerRef = useRef();
  const chartRef = useRef(null); // Usamos un ref para almacenar la instancia del gráfico
  const seriesRef = useRef([]); // Usamos un ref para almacenar las series del gráfico

  useEffect(() => {
    // Verifica si las cotizaciones están disponibles y hay índices seleccionados
    if (selectedIndices.length === 0 || Object.keys(cotizaciones).length === 0) return;

    // Si el gráfico ya existe, lo eliminamos antes de crear uno nuevo
    if (chartRef.current) {
      chartRef.current.remove();
    }

    // Crear el gráfico
    chartRef.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: chartContainerRef.current.clientHeight,
      lineColor: '#2962FF',
      crosshair: { mode: 0 },
      grid: { vertLines: { color: '#f0f0f0' }, horzLines: { color: '#f0f0f0' } },
    });

    // Limpiar las series previas almacenadas
    seriesRef.current.forEach((series) => series.remove());
    seriesRef.current = [];

    // Agregar una serie por cada índice seleccionado
    selectedIndices.forEach((indice) => {
      if (cotizaciones[indice]) {
        // Asegurémonos de que los datos estén en el formato adecuado para el gráfico
        const formattedData = cotizaciones[indice].map((cotizacion) => ({
          time: Math.floor(new Date(cotizacion.dateUTC).getTime() / 1000), // Convertimos la fecha a timestamp (en segundos)
          value: cotizacion.cotizacion, // Este es el valor que se quiere graficar
        }));

        // Validar que los datos tengan el formato esperado (al menos un punto de datos)
        if (formattedData.length > 0) {
          const lineSeries = chartRef.current.addLineSeries({
            color: getRandomColor(), // Genera un color aleatorio para cada línea
            lineWidth: 2,
          });
          lineSeries.setData(formattedData); // Pasamos los datos formateados
          seriesRef.current.push(lineSeries); // Almacenamos la serie en el ref
        }
      }
    });

    // Limpiar el gráfico cuando el componente se desmonte
    return () => {
      chartRef.current.remove();
    };
  }, [cotizaciones, selectedIndices]);

  // Función para generar un color aleatorio para cada serie
  const getRandomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

  return (
    <div
      ref={chartContainerRef}
      className="relative w-full h-96 bg-white border border-gray-300 rounded-lg shadow-md"
    >
      {/* El gráfico se renderiza aquí */}
    </div>
  );
};

export default ChartComponent;


