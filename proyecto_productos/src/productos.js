import React, { Component } from "react";
import './productos.css';
const listarproductos = [

    {
        id: 1,
        descripcion: "Zapatito rojo",
        precio:12000,
    },
    {
        id: 2,
        descripcion: "zapatito azul",
        precio:14000,
    }

]

class productos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listarproductos: listarproductos,
        }
    }

    render(){
        return (
            <div className="principal">
                <div><h2>Listado</h2>

                <table>
                    
                    <th>Nombre</th><th>Precio</th><th></th>
                    
                    
                    
            {
                listarproductos.map(function(item) {
                    return  <tr><td>{item.descripcion}</td><td>{item.precio}</td><td ><button class="cursor-style">Eliminar</button></td></tr>
                    
                  
                    
                })
            }
      
            </table>
            </div>
            </div>
        
        )
    }
}
export default productos;