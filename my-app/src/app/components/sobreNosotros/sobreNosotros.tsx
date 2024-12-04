"use client"
import './sobreNosotros.css';
import { useTranslation } from 'next-i18next';
import '../../i18n';


export default function SobreNosotros() {
  const { t, i18n } = useTranslation();
    return (
        <>
     <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800 py-10 px-4">
      <div className="max-w-4xl w-full text-center bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-serif p-5 text-gray-800 mb-6">{t('quienesSomos')}</h2>
        <p className="text-lg text-gray-700 mb-6">
        {t('textoQuienesSomos')}        
        </p>

        <h3 className="text-3xl font-serif p-4 text-gray-800 mb-4">{t('nuestraMision')}</h3>
        <p className="text-lg text-gray-700 mb-6">
        {t('textoNuestraMision')}        
        </p>

        <h3 className="text-3xl font-serif p-5 text-gray-800 mb-4">{t('datoImportante')}</h3>
        <p className="text-lg text-gray-700">
        {t('textoDatoImportante')}        
        </p>
      </div>
    </div>
       </>
    );
}