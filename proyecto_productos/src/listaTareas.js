import React, { Component } from 'react';

class listaTareas extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
            Username:"Nicolas",
            Todoitems: [
                {
                    accion: "endulzar a mi amigo secreto",
                    done: false,
                },
                {
                    accion: "Comprar Almuerzo",
                    done: true,
                }
            ],
            newItemText: "",
		};
	}

    UpdateNewTextvalue = (event) => {
        this.setState ({newItemText: event.target.value});
    }

     createNewTodo = () => {
        if (!this.state.Todoitems
            .find( item => item.accion === this.state.newItemText))
            {
                this.setState({
                    Todoitems: [
                        ...this.state.Todoitems,
                        {
                            accion: this.state.newItemText,
                            done: false
                        }],
                    });
                }
            }

        ToggleTodo = (todo) => this.setState({Todoitems:
           this.state.Todoitems.map(item => item.accion === todo.accion
            ? {...item,done: !item.done } : item )
        });

        todoTableRows = () => this.state.Todoitems.map(item =>
            <tr key={item.accion}>
                <td>{item.accion}</td>
                <td>
                    <input type="checkbox" checked={item.done}
                    onChange={()=>this.ToggleTodo(item)}></input>
                </td>
            </tr>
            )
render(){
return(
<div>
    <h1 className='bg-primary text-white'> Lista de tareas de {this.state.Username}<span> </span>({this.state.Todoitems.filter(t => !t.done).length}- cosa(s) por Hacer)</h1>
    <div className='container-fluid'>
        <div>
            <input className='form-control' value={this.state.newItemText}
            onChange={this.UpdateNewTextvalue}></input>
            <button className='btn btn-primary' onClick={this.createNewTodo}>Agregar</button>

      </div>
      <table className='table table-striped table-bordered'>
            <thead>
            <tr><th>Descripcion</th></tr>
            </thead>
            <tbody>{this.todoTableRows()}
            </tbody>
      </table>
    </div>
</div>
)
}
}
export default listaTareas;