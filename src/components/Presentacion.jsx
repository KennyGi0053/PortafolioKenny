import pc from "../assets/pc1.png"



const Presentacion = () => {
  return (
    <div className=" md:mt-12  px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="mt-10 md:mt-10">
            <p className="text-[#1269FF] font-bold">¡Hola! Soy</p>
            <h1 className="text-4xl font-bold">Kenny Pérez</h1>
            <p className="mt-2 text-gray-700 font-semibold">Desarrollador Full Stack</p>
            <p className="mt-4 text-gray-700 text-justify">Diseñando experiencias digitales memorables con enfoque en usabilidad, innovación y detalle.</p>
            <p className="text-gray-700 text-justify">Especializado en desarrollo web moderno, aplicaciones móviles (Android & iOS) y soluciones innovadoras</p>
            <button className="mt-4 bg-[#1269FF] rounded-md shadow-2xl h-8 w-34 text-white font-semibold text-sm cursor-pointer">Ver Proyectos</button>
        </div>
        <div>
            <img src={pc} alt="Imagen de pc para presentacion" 
            className="items-center rounded-2xl"
            /> 
        </div>
    </div>
  )
}

export default Presentacion
