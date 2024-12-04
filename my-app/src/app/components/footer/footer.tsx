'use client'
import React from "react";
import "@/app/components/footer/footer"
import { useTranslation } from 'next-i18next';
import '../../i18n';

export function Footer() {
 const { t, i18n } = useTranslation();   
    return (
        <>
            <footer className="footer bg-slate-700 p-16">
                <aside>
                    <p className="text-white font-bold text-center text-xl">
                        Euronext Paris
                    </p>
                    <br />
                    <br />
                    <div className="text-slate-700 text-center columns-2 ml-[516px] w-max h-36 place-content-center ">
                        <div className="bg-gray-300 rounded-lg px-4">
                            <h4 className="text-lg font-semibold mb-4">{t('contacto')}</h4>
                            <ul className="list-none space-y-2 text-sm">
                                <li><strong>{t('sitioOficial')}</strong> <a href="https://www.euronext.com" className="text-blue-600 rounded-sm hover:underline" target="_blank" rel="noopener noreferrer">www.euronext.com</a></li>
                                <li><strong>Tél. :</strong> +33 (0)1 70 48 24 10</li>
                                <li><strong>{t('direccion')}:</strong> 39, rue Cambon, 75001 Paris, France</li>
                            </ul>
                        </div><br />
                        <div className="bg-gray-300 rounded-lg px-4">
                            <h4 className="text-lg font-semibold mb-4">{t('seguinos')}</h4>
                            <ul className="list-none space-y-2 text-sm">
                                <li><a href="https://twitter.com/Euronext" className="text-blue-600 rounded-sm hover:underline" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                                <li><a href="https://www.linkedin.com/company/euronext" className="text-blue-600 rounded-sm hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                                <li><a href="https://www.facebook.com/Euronext" className="text-blue-600 rounded-sm hover:underline" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            </ul>
                        </div>
                    </div> 
                    <p className="p-8  text-lg pl-[700px] ">Copyright © {new Date().getFullYear()} - {t('copyright')}</p>
                    
                    {/* Contenedor para los botones alineados a la derecha */}
                    <div className="flex justify-end pl-[615px] bottom-40 space-x-4 mt-4">
                        <button className="font-serif rounded-lg border transition-colors border-gray-200 bg-slate-600 text-white h-10 w-60 text-[1.25em] z-10 hover:bg-white hover:text-black" onClick={() => i18n.changeLanguage('fr')}>Français</button>
                        <button className="font-serif rounded-lg border transition-colors border-gray-200 bg-slate-600 text-white h-10 w-60 text-[1.25em] z-10 hover:bg-white hover:text-black" onClick={() => i18n.changeLanguage('es')}>Español</button>
                    </div>
                </aside>
            </footer>
        </>
    );
}