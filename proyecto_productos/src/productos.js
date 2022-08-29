import React, { Component } from 'react';
import './productos.css';

const list = [
	{
		id:1,
		nombre:"david",
		year:1967,
	},
	{
		id:2,
		nombre:"nicolas",
		year:1985,
	},
	{
		id:3,
		nombre:"juan",
		year:1981,
	}
];
//46..<div key={item.id}>   70 </div>
function buscar(nombre) {
	return function(item) {
		return item.nombre.toLowerCase().includes(nombre.toLowerCase())
	}
}
class ProductosII extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			list,
			nombre: ''
		};

		this.Eliminar = 
		this.Eliminar.bind(this);
		this.onSearchChange = this.onSearchChange.bind(this);
	}
	
	Eliminar(id) {
		const isNotId = item => item.id !== id;
		const listaActualizada = 
		this.state.list.filter(isNotId);
		this.setState({ list: listaActualizada });
	}
	onSearchChange(event) {
		this.setState({ nombre: event.target.value});
	}
   render() {
      return(
        <div><h1>listado </h1> 
		<div className='principal'>
           
            <form>
				<input type="text" onChange={this.onSearchChange}></input>
			</form>
             <table>
                <thead>
                     <tr>
                        <th>Nombre</th><th>Año</th><th>delete</th>
                        </tr>
                </thead>
			
				
                   
					<tbody>
					{this.state.list.filter(buscar(this.state.nombre)).map(item => 
                       
                        <tr key={item.id}>

                            <td>
						{item.nombre} 
						</td>
                        <td>
						{item.year} 
						</td>
                        <td>
						<button class="cursor-style" 
							onClick={() => this.Eliminar(item.id)}
							type="button"
						>
						Eliminar
						</button> 
                        </td>
					
                    </tr>
					)}
                    </tbody>
                    
				
			
            
            </table>
		</div>
        </div>
      );
   }
}

export default ProductosII;