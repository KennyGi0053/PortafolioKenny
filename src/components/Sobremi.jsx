import foto from "../assets/Kenny.png"
import henry from "../assets/certificacion Henry.png"
import platzi1 from "../assets/curso basico de tailwindcss.png"
import platzi2 from "../assets/reactjs con vite y tailwindcss.png"
const Sobremi = () => {
  return (
    <div className='mt-10 bg-gray-50'>
        <h1 className='text-center font-extrabold text-xl'>Sobre Mí</h1>
    <div className="flex flex-col md:flex-row md:ml-100">
        <img src={foto} alt="Foto Kenny Perfil" 
        className="mt-6 h-60 items-center mx-auto md:h-80"
        />
        <div className="mt-4 m-2 space-y-4 md:ml-20">

        <p className="mt-6 px-4 text-justify text-gray-700 md:text-center">Con 2 años de experiencia en desarrollo web, android y iOS, me Especializo 
            en crear soluciones digitales elegantes, modernos y eficientes. Mi pasión 
            por la tecnología y el aprendizaje continuo me impulsa a mantenerme actualizado
            con las últimas tendencias y mejores prácticas en desarrollo
        </p>
        <p className="mt-6 text-center font-semibold">Certificaciones</p>
        <div className="flex flex-row gap-4 h-40 overflow-x-auto md:overflow-x-visible md:justify-center md:mt-6">

        <img src={henry} alt="certificacion Henry"
        className="transition-transform duration-300 transform hover:scale-320"
        />
        <img src={platzi2} alt="react con vite y tailwind css" 
        className="transition-transform duration-300 transform hover:scale-320"
        />
        <img src={platzi1} alt="tailwindcss basico"
        className="transition-transform duration-300 transform hover:scale-320"
        />
        </div>
        </div>

    </div>
    </div>
  )
}

export default Sobremi
