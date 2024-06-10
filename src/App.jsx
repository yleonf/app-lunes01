
import './App.css'
import Saludo from './Saludo.jsx'
import Estudiantes from './Estudiantes.jsx'
// Uso de props
function App() {
  const alumno={
    nombre:"Yasna",
    edad:35
  }
  return (
    <>
      <h1>APP REact</h1>
      <h1>Hello</h1>
      <Saludo nombre="Juan"/>
      <Estudiantes datos={alumno}/>
    </>
  
  )
}

export default App
