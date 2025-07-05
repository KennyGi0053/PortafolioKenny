import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/Kennylogo4.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Cierra el menú en móvil
    }
  };

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
          {["inicio", "sobremi", "proyectos", "habilidades", "contacto"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-700 text-sm font-medium hover:text-[#1269FF] transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("mi", " Mí")}
            </button>
          ))}
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {open && (
        <div className="flex flex-col md:hidden gap-4 mt-2 px-4">
          {["inicio", "sobremi", "proyectos", "habilidades", "contacto"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-gray-700 text-sm text-left"
            >
              {id.charAt(0).toUpperCase() + id.slice(1).replace("mi", " Mí")}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;