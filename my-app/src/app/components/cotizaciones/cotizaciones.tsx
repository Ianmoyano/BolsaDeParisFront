import React, { useState, useEffect, useRef } from 'react'; 
import { useTranslation } from 'react-i18next';
import { verIndiceCotizaciones } from '@/app/axios/axiosData';
import { createChart } from 'lightweight-charts';

export default function Indices() {
  const [allCodes, setAllCodes] = useState<string[]>([]);
  const [visibleCodes, setVisibleCodes] = useState<string[]>(['PAR', 'IMV', 'BRN', 'FWB']);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<any | null>(null);
  const lineSeriesRef = useRef<{ [key: string]: any }>({});
  const { t, i18n } = useTranslation(); 
  useEffect(() => {
    const fetchIndicesCotizaciones = async () => {
      try {
        const data = await verIndiceCotizaciones();

        const groupedData: { [key: string]: any[] } = {};
        data.forEach((item: { code: string; fechaDate: string; valor: number }) => {
          const { code, fechaDate, valor } = item;
          const timestamp = new Date(fechaDate).getTime() / 1000;
          if (!groupedData[code]) groupedData[code] = [];
          groupedData[code].push({ time: timestamp, value: valor });
        });

        Object.entries(groupedData).forEach(([code, lineData]) => {
          groupedData[code] = lineData
            .sort((a, b) => a.time - b.time)
            .filter((item, index, self) => index === 0 || item.time !== self[index - 1].time);
        });

        setAllCodes(Object.keys(groupedData));

        createChartWithData(groupedData);
      } catch (error) {
        console.error('Error al cargar las cotizaciones:', error);
      }
    };

    fetchIndicesCotizaciones();
  }, []);

  const createChartWithData = (groupedData: { [key: string]: any[] }) => {
    if (!chartContainerRef.current) return;

    if (!chartRef.current) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.offsetWidth * 0.7,
        height: 400, // Aumentamos la altura del gráfico
        layout: { background: { color: '#000' }, textColor: '#FFF' },
        grid: {
          vertLines: { color: '#444' },
          horzLines: { color: '#444' },
        },
      });
    }

    const colors = [
      'rgba(255, 99, 132, 0.8)', 
      'rgba(54, 162, 235, 0.8)', 
      'rgba(255, 159, 64, 0.8)', 
      'rgba(75, 192, 192, 0.8)', 
      'rgba(153, 102, 255, 0.8)', 
    ];

    Object.entries(groupedData).forEach(([code, lineData], index) => {
      if (!lineSeriesRef.current[code]) {
        const color = colors[index % colors.length];
        const lineSeries = chartRef.current.addLineSeries({ color, title: code });

        lineSeries.setData(lineData);
        lineSeriesRef.current[code] = lineSeries;

        lineSeries.applyOptions({ visible: visibleCodes.includes(code) });
      }
    });

    chartRef.current.timeScale().fitContent();

    const resizeObserver = new ResizeObserver(() => {
      chartRef.current?.resize(chartContainerRef.current?.offsetWidth || 0, 400);
    });

    resizeObserver.observe(chartContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      chartRef.current?.remove();
      lineSeriesRef.current = {};
    };
  };

  const toggleLineVisibility = (code: string) => {
    setVisibleCodes((prevCodes) => {
      const newVisibleCodes = prevCodes.includes(code)
        ? prevCodes.filter((item) => item !== code)
        : [...prevCodes, code];

      const series = lineSeriesRef.current[code];
      if (series) {
        series.applyOptions({ visible: newVisibleCodes.includes(code) });
      }

      return newVisibleCodes;
    });
  };

  return (
    <>
  <h2 className="text-2xl font-bold text-white pl-10 pt-10">{t('grafico')}</h2>

<div className="flex pl-24 items-start pt-10">
  <div className="contentContainer flex flex-col gap-4 mb-6"> {/* Agregado margen inferior */}
    
    <div className="botonesContainer grid grid-cols-2 gap-4">
      {allCodes.map((code) => (
        <button
          key={code}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-300 transform ${
            visibleCodes.includes(code) ? 'opacity-100' : 'opacity-50'
          }`}
          style={{ maxWidth: '120px' }}
          onClick={() => toggleLineVisibility(code)}
        >
          {code}
        </button>
      ))}
    </div>
  </div>
  <div className="w-2/3 mt-6"> {/* Agregado margen superior */}
    <div ref={chartContainerRef} className="pl-36 chartContainer"></div>
  </div>
</div>

    </>
  );
}




