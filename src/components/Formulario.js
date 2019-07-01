import React, { Component } from 'react';
import PropTypes from 'prop-types';


class FormularioGasto extends Component{

    //refs

    nombreGastoRef = React.createRef();
    cantidadGastoRef = React.createRef();

    crearGasto = (e) =>{
        e.preventDefault(); //prevenimos la forma default
        
        const gasto = { //creamos el objeto gasto con los datos obtenidos arriba
            nombreGasto: this.nombreGastoRef.current.value,
            cantidadGasto: this.cantidadGastoRef.current.value
        }

        
        this.props.agregarGasto(gasto); //agregar objeto y enviarlo al props
       
        e.currentTarget.reset();
    }

    render(){
        return(
            <form onSubmit={this.crearGasto}>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input className="u-full-width" type="text" placeholder="Ej. Transporte" ref={this.nombreGastoRef} />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input className="u-full-width" type="text" placeholder="Ej. 300" ref={this.cantidadGastoRef}/>
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        )
    }
}

FormularioGasto.propTypes = { //CON ESTO NOS ASEGURAMOS DE PASAR LOS PROPS QUE QUEREMOS
    agregarGasto: PropTypes.func.isRequired
}

export default FormularioGasto;