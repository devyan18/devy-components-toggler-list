import './App.css'
import Toggler from './Components/Toggler'

const Tasks = ['primer tarea', 'segunda tarea', 'tercer tarea', 'cuarta tarea', 'quinta tarea']
const Colors = ['background-dark', 'background-light', 'primary-color', 'secondary-color', 'text-color']

function App() {
  return (
    <div className='App'>
      <div className='Side-Bar'>
        <Toggler text={'Todas las tareas'}>
          {
            Tasks.map((e, i) => {
              return (<li key={i}>{e}</li>)
            })
          }
        </Toggler>
        <Toggler text={'Todos los colores'}>
          {
            Colors.map((e, i) => {
              return (<li key={i}>{e}</li>)
            })
          }
        </Toggler>
      </div>
      <div className='Content'>
        <h2>Hello! this is a layout component for create toggler lists :3</h2>
      </div>
    </div>
  )
}

export default App
