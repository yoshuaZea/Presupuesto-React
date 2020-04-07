import React, { Fragment, useState, useEffect } from 'react';
import './index.css';

// Componentes
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  // Definir el state para pasarlos al componente pregunta
  const [ presupuesto, setPresupuesto ] = useState(0)
  const [ restante, setRestante ] = useState(0)
  const [ mostrarPregunta, setMostrarPregunta ] = useState(true)
  const [ gastos, setGastos ] = useState([])
  const [ gasto, setGasto ] = useState({})
  const [ crearGasto, setCrearGasto ] = useState(false)
  
  // useEffect que actualiza el restante
  useEffect(() => {
    if(crearGasto){
      setGastos([
        ...gastos, // Crear una copia de lo que exista
        gasto
      ])

      // Restar presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)

      // Resetear a false
      setCrearGasto(false)
    }
  }, [gasto, crearGasto, gastos, restante])

  return (
    <Fragment>
      <header className="container">
        <h1>Gasto semanal</h1>
        <div className="contenido-principal contenido">
          { // Carga condicional de un componente
            mostrarPregunta 
            ? (
              <Pregunta 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarPregunta={setMostrarPregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    setGasto={setGasto}
                    setCrearGasto={setCrearGasto}
                  />
                </div>
                <div className="one-half column">
                  <Listado 
                    gastos={gastos}
                  />
                  <ControlPresupuesto 
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )
          }
        </div>
      </header>
    </Fragment>
  );
}

export default App;
