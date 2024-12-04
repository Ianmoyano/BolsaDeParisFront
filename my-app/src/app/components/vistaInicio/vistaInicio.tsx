"use client"
import './vistaInicio.css';
import { useTranslation } from 'next-i18next';
import '../../i18n';
import { verCotizaciones } from '@/app/axios/axiosData';
import { useEffect } from 'react';

export default function VistaInicio() {
    const { t, i18n } = useTranslation();   
    console.log(verCotizaciones)
    
    return (
        <>
       
            <div className='text-white font-serif text-xl p-12 text-left '>{t('infoInicio')}<br /><br />
                <div>{t('textoInicio')}</div>
                <br />
                <br />{t('porHora')}
                <br />{t('porMes')}
            </div>
            <div className="carousel relative ml-[26%] top-6 content-center h-96 rounded-box w-[900px]">

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="./images/paris1.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="./images/illuminations-de-paris-2.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                            src="./images/fontaineconcorde.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                            src="./images/arco.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
            <div className='grid-rows-2 p-14'>
            <a href="/cotizaciones">
                <button className="  relative ml-[36%] font-serif rounded-lg border transition-colors border-gray-200 bg-slate-600 text-white h-10 w-60 text-[1.25em] z-10 hover:bg-white hover:text-black" >{t('cotizaciones')}</button>
                </a>
                <a href="/sobreNosotros">
                <button className="  relative ml-2 font-serif rounded-lg border transition-colors border-gray-200 bg-slate-600 text-white h-10 w-60 text-[1.25em] z-10 hover:bg-white hover:text-black">{t('sobreNosotros')}</button>
            </a>
            </div>
        </>
    );
}