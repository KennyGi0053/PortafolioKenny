import foto from "../assets/Kenny1.png"
import henry from "../assets/certificacion Henry.png"
import platzi1 from "../assets/curso basico de tailwindcss.png"
import platzi2 from "../assets/reactjs con vite y tailwindcss.png"
const Sobremi = () => {
  return (
    <div className='mt-10 bg-gray-50'>
        <h1 className='text-center font-extrabold text-xl md:pt-20'>Sobre Mí</h1>
    <div className="flex flex-col md:flex-row md:ml-60">
        <img src={foto} alt="Foto Kenny Perfil" 
        className="mt-6 h-60 rounded-2xl items-center mx-auto md:h-100 "
        />
        <div className="mt-4 m-2 space-y-4 md:ml-24">

        <p className="mt-6 text-justify text-gray-700 md:text-center md:pt-20 md:text-justify md:mr-6">Con 2 años de experiencia en desarrollo web, android y iOS, me Especializo 
            en crear soluciones digitales elegantes, modernos y eficientes. Mi pasión 
            por la tecnología y el aprendizaje continuo me impulsa a mantenerme actualizado
            con las últimas tendencias y mejores prácticas en desarrollo,
        </p>
        <div className="flex flex-row gap-4 mt-8 h-40 overflow-x-auto md:overflow-x-visible md:justify-center md:mt-16 md:gap-24">

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
