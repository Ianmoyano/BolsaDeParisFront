'use client'
import NavBar from "@/app/components/navBar/navBar";
import SobreNosotros from "@/app/components/sobreNosotros/sobreNosotros";

export default function Home() {
  return (
    <div className="bg-slate-800">
    <NavBar/>
    <SobreNosotros/>
    <nav/>
    </div>
  );
}