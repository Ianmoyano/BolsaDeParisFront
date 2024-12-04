'use client'

import Cotizaciones from "@/app/components/cotizaciones/cotizaciones";
import NavBar from "@/app/components/navBar/navBar";

export default function Home() {
  return (
    <div className="bg-slate-800">
    <NavBar/>
   <Cotizaciones/>
    </div>
  );
}