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
class ProductosII extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			list,
		};

		this.Eliminar = 
		this.Eliminar.bind(this);
	}
	
	Eliminar(id) {
		const isNotId = item => item.id !== id;
		const listaActualizada = 
		this.state.list.filter(isNotId);
		this.setState({ list: listaActualizada });
	}
   render() {
      return(
        <div><h1>listado </h1> 
		<div className='principal'>
           
            
             <table>
                <thead>
                     <tr>
                        <th>Nombre</th><th>Año</th><th>delete</th>
                        </tr>
                </thead>
			{this.state.list.map(item => 
				
                   
					<tbody>
                       
                        <tr>

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
                    </tbody>
                    
				
			)}
            
            </table>
		</div>
        </div>
      );
   }
}

export default ProductosII;