import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    render() {
        const {cantidadGasto, nombreGasto} = this.props.gasto; //recibe el gasto individualmente por detructuring
        
        return (
            <div>
                <li className="gastos">
                    <p>
                        {nombreGasto}
                        <span className="gasto"> ${cantidadGasto} </span>
                    </p>
                </li>
            </div>
        );
    }
}

Gasto.protoTypes = {
    gasto: PropTypes.object.isRequired
}

export default Gasto;