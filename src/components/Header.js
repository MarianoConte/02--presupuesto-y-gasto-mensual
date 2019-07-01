import React from 'react';

const Header = (props) =>{
   return( 
        <div className="App container">   
            <header>
                <h1>{props.titulo}</h1>
            </header>
        </div> 
   )
}

export default Header;