import html from '../assets/html.png'
import ccs from "../assets/ccs3.png"
import javascript from "../assets/javascript.png"
import redux from "../assets/redux.png"
import react from "../assets/react.png"
const Habilidades = () => {
  return (
    <div className='mt-10 bg-gray-100 py-12'>
      <h1 className='text-2xl font-bold text-center'>Habiliadades Técnicas</h1>
    <div className='mt-10 grid grid-cols-3 md:grid-cols-4 gap-6 px-6'>
      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30'>
      <img src={html} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>HTML5</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30'>
      <img src={ccs} alt='html logo'
      className='h-10'
      />
      <p className='font-medium mt-4'>CCS3</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30'>
      <img src={javascript} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>JavaScript</p>
      </div>
      
      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30'>
      <img src={react} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>React</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30'>
      <img src={redux} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Redux</p>
      </div>
    </div>
    </div>
  )
}

export default Habilidades
