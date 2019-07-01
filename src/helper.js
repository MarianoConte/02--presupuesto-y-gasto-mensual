export const validarPresupuesto = presupuesto => {

    let totalPresupuesto = parseInt(presupuesto, 10)|| 0; //verifica si es un numero

    if(totalPresupuesto > 0 ) { //y si es mayor a 0
        return totalPresupuesto;
    } else {
        return false;
    }
}

export const revisarPresupuesto = (presupuesto,restante) => {
    let clase;
    // Comprobar el 25% 
    if( (presupuesto / 4) > restante) {
         clase = 'alert alert-danger';
    } else if( (presupuesto / 2) > restante) {
        clase = 'alert alert-warning'
    } else {
        clase = 'alert alert alert-success';
    }
    return clase;
} 