import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/kennylogo4.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-b-2 border-b-gray-100 ">
      <div className="flex items-center justify-between h-14">
        <img src={logo} alt="Kenny Dev Logo" className="h-40" />

        {/* Botón hamburguesa en pantallas pequeñas */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {open ? <X className="w-6 h-6 mr-4" /> : <Menu className="w-6 h-6 mr-4" />}
        </button>

        {/* Menú horizontal en desktop */}
        <div className="hidden md:flex flex-row items-center space-x-10 mr-10">
          <a href="#inicio" className="text-gray-700 text-sm font-medium">Inicio</a>
          <a href="#sobremi" className="text-gray-700 text-sm font-medium">Sobre Mí</a>
          <a href="#proyectos" className="text-gray-700 text-sm font-medium">Proyectos</a>
          <a href="#habilidades" className="text-gray-700 text-sm font-medium">Habilidades</a>
          <a href="#contacto" className="text-gray-700 text-sm font-medium">Contacto</a>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {open && (
        <div className="flex flex-col md:hidden gap-4 mt-2 px-4">
          <p className="text-gray-700 text-sm">Inicio</p>
          <p className="text-gray-700 text-sm">Sobre Mí</p>
          <p className="text-gray-700 text-sm">Proyectos</p>
          <p className="text-gray-700 text-sm">Habilidades</p>
          <p className="text-gray-700 text-sm">Contacto</p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;