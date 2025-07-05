import './App.css'
import Contacto from './components/Contacto'
import Habilidades from './components/Habilidades'
import Navbar from './components/Navbar'
import Presentacion from './components/presentacion'
import Proyectos from './components/Proyectos'
import Sobremi from './components/Sobremi'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <div>
        <Navbar/>
        <Presentacion/>
        <Sobremi/>
        <Proyectos/>
        <Habilidades/>
        <Contacto/>
        <ToastContainer/>
      </div>
      
  )
}

export default App
