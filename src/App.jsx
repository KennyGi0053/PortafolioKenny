import './App.css'
import Habilidades from './components/Habilidades'
import Navbar from './components/Navbar'
import Presentacion from './components/presentacion'
import Proyectos from './components/Proyectos'
import Sobremi from './components/Sobremi'

function App() {

  return (
      <div>
        <Navbar/>
        <Presentacion/>
        <Sobremi/>
        <Proyectos/>
        <Habilidades/>
      </div>
      
  )
}

export default App
