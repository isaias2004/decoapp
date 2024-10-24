import { Search } from "lucide-react"

export default function Header() {
  return (
    
    <header className="bg-black	 shadow-md opacity-75">
      
      <nav className="flex flex-row max-w-full py-8 ">
              <div className="container mx-auto px-4 py-2">
              <Search className="h-5 w-5 text-gray-400 mb-5"/>
                <ul className="flex justify-evenly items-stretch content-center text-sm font-medium  border-t">
                  <li><a href="#" className="text-slate-100 hover:text-gray-800 grow">Quienes somos</a></li>
                  <li><a href="#" className="text-slate-100 hover:text-gray-800 grow">Servicios</a></li>
                  <li><a href="#" className="text-slate-100 hover:text-gray-800 grow">Experiencia</a></li>
                  <li><a href="#" className="text-slate-100 grow-1 text-3xl tracking-widest	 ">FONTENLA</a></li>
                  <li><a href="#" className="text-slate-100 hover:text-gray-800 grow">Porfolio</a></li>
                  <li><a href="#" className="text-slate-100 hover:text-gray-800 grow">Novedades</a></li>
                  <li><a href="#" className="text-slate-100 hover:text-gray-800 grow">Contactos</a></li>
                </ul>
              </div>
          </nav>
    </header>
    
  )
}

