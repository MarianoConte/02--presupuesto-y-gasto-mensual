import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado';
import ControlPresupuesto from './ControlPresupuesto';
import {validarPresupuesto} from '../helper';
import '../css/App.css';

class App extends Component {

  state = {
    presupuesto: '',
    restante: '',
    gastos:{}
  }

  agregarGasto = gasto =>{ //recibe el gasto nuevo
    //tomar una copia del state actual
    const gastos = {...this.state.gastos};

    //agregar gasto al objeto del state
    //GENERAR UNA LLAVE SIN BASE DE DATOS
    gastos[`gasto${Date.now()}`] = gasto; //Añade el gasto ingresado en props dentro de const gastos y le da una key unica con datenow"

    this.restarPresupuesto(gasto.cantidadGasto);
    
    //ponerlo en state

    this.setState({
      gastos
    })
  }

  //restar del presupuesto cuando un gasto se crea
  restarPresupuesto = cantidad =>{
    
    let restar = Number(cantidad);

    let restante = this.state.restante;

    restante -= restar;

    restante = String(restante);

    this.setState({restante});
  }


  componentDidMount(){ //cuando se inicializa el componente APP va a preguntar cual es nuestro presupuesto
    this.obtenerPresupuesto(); 
  }


  obtenerPresupuesto = () =>{
    let presupuesto = prompt('Cual es el presupuesto?');

    let resultado = validarPresupuesto(presupuesto);
    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      })
    }
    else{
      this.obtenerPresupuesto();
    }
  }

  render() {
    return (
      <div className="App container">
        <Header
        titulo ='Gasto Semanal'
        />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
            <Formulario
              agregarGasto={this.agregarGasto}
            />
            </div>
            <div className="one-half column">
              <Listado 
                gastos = {this.state.gastos}
              />
              <ControlPresupuesto 
                presupuesto = {this.state.presupuesto}
                restante = {this.state.restante}
              />
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default App;
