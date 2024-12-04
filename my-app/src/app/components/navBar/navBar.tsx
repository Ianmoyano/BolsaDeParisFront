"use client"
import './navBar.css';
import { useTranslation } from 'next-i18next';
import '../../i18n';

export default function NavBar() {
    const { t, i18n } = useTranslation();
    return (
        <>

            <div className="navbar  bg-slate-700">
                <a href="/" className='text-left p-5 relative text-white text-3xl font-serif bg-slate-700 '>Euronext Paris</a>
                <div className="flex-1 ml-3 mb-1 px-2 lg:flex-none">
                    <a href='/'></a>
                </div>
                <div className="flex flex-1 justify-end px-2">
                    <div className="flex items-stretch text-white">
                        <a href='/' className="btn btn-ghost rounded-btn">{t('inicio')}</a>
                        <a href="/cotizaciones" className="btn btn-ghost rounded-btn">{t('cotizaciones')}</a>
                        <a href="/sobreNosotros" className="btn btn-ghost rounded-btn">{t('sobreNosotros')}</a>
                    </div>
                </div>
            </div>
        </>
    );
}