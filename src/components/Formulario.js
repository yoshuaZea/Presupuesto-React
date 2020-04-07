import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({setGasto, setCrearGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        // Validar 
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true)
            return
        }

        setError(false)

        // Construir el gasto
        const gasto = {
            nombre, 
            cantidad,
            id: shortid.generate()
        }

        // Pasar gasto al componente principal
        setGasto(gasto)
        setCrearGasto(true)

        // Resetear el form
        setNombre('')
        setCantidad(0)        
    }

    return ( 
        <form 
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos</h2>
            
            {   
                error ? (<Error message="Ambos campos son obligatorios o presupuesto incorrecto" />) : null
            }

            <div className="campo">
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombre}
                    onChange={ e => setNombre(e.target.value) }
                />
            </div>

            <div className="campo">
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 500"
                    value={cantidad}
                    onChange={ e => setCantidad(parseInt(e.target.value)) }
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    )
}

// Documentar componente
Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario