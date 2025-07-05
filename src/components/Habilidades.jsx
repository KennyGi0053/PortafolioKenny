import html from '../assets/html.png'
import ccs from "../assets/ccs3.png"
import javascript from "../assets/javascript.png"
import redux from "../assets/redux.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import postgresql from "../assets/postgresql.png"
import express from "../assets/express.png"
import sequelize from "../assets/sequelize.png"
import reactnative from "../assets/reactnative.png"
import expo from "../assets/expo1.png"
import nativewind from "../assets/nativewind.png"
import github from "../assets/github.png"
import bitbucket from "../assets/bitbucket.png"
import visual from "../assets/visualstudio.png"
import androidstudio from "../assets/androidstudio.png"
import trello from "../assets/trelo.png"
const Habilidades = () => {
  return (
    <div id="habilidades" className='mt-10 bg-gray-50 py-12'>
      <h1 className='text-2xl font-bold text-center'>Habilidades Técnicas</h1>
    <div className='mt-10 grid grid-cols-3 md:grid-cols-9 gap-6 px-6 md:px-20 md:gap-12 '>
      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={html} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>HTML5</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={ccs} alt='html logo'
      className='h-10'
      />
      <p className='font-medium mt-4'>CCS3</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={javascript} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>JavaScript</p>
      </div>
      
      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={react} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>React</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={redux} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Redux</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={tailwind} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Tailwind</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={node} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Node js</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={postgresql} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>PostgreSQL</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={express} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Express JS</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={sequelize} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Sequelize</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={reactnative} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4 text-sm'>React Native</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38' >
      <img src={expo} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Expo</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={nativewind} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Nativewind</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={github} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Github</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={bitbucket} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Bitbucket</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={visual} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4 text-sm text-center'>Visual Studio Code</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={androidstudio} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4 text-sm text-center'>Android Studio</p>
      </div>

      <div className='flex flex-col items-center bg-white shadow-md rounded-xl p-4 w-30 md:w-38'>
      <img src={trello} alt='html logo'
      className='h-9'
      />
      <p className='font-medium mt-4'>Trello</p>
      </div>
    </div>
    </div>
  )
}

export default Habilidades
