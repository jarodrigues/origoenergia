import React, { useState, useEffect } from 'react';
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi';
import { Link} from 'react-router-dom';
import api from './../../Api';

import './style.css';
const Clientes = () =>{

  const [clientes, setClientes] = useState([]);
  const [delCliente, setDelCliente] = useState([]);
  useEffect(() => {
      api.get('clientes').then(response => {
        setClientes(response.data);
        console.log(response.data);
      });
  }, [delCliente]); 

  function planoCliente(){
    
  }

  function responseServer(data){
    alert(data.data.msg);
  }

async function deleteCliente(id){
    
    const idcliente = id;
    if (window.confirm("Deseja excluir o registro")) {
      await api.delete(`clientes/${idcliente}`).then(response => {
        responseServer(response.data);
        
        setDelCliente(idcliente);
      });
    } else {
      return;
    }
    
}

    return(
      <div className="tblist bd-example">
          <Link to="/novocliente" className="btn btn-info">
              <span> <FiPlus /> </span>Novo registro
          </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Telefone</th>
              <th scope="col">Dt. Nascimento</th>
              <th scope="col">Estado</th>
              <th scope="col">Cidade</th>
              <th scope="col">Plano</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>          
            {clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>
                  {cliente.nome}
                </td>
                <td>
                  {cliente.email}
                </td>
                <td>
                  {cliente.email}
                </td>
                <td>
                  {cliente.dt_nascimento}
                </td>
                <td>
                  {cliente.nestado}
                </td>
                <td>
                  {cliente.ncidade}
                </td>
                <td>
                  
                    <div className="dropdown">
                      <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Planos
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {cliente.plano.map(pl => (
                           
                          <span className={typeof pl[0] === 'undefined'? 'd-none': "dropdown-item"}>{typeof pl[0] === 'undefined'? '': pl[0].nome}</span>
                          
                        ))}
                      </div>
                    </div>
                         
                </td>
                <td>
                  <Link to={`/edit/${cliente.id}`} className= "badge badge-secondary hi" alt="Editar"><span> <FiEdit /> </span></Link>
                  <button  onClick={() => deleteCliente(cliente.id)} className={cliente.uf == "SP"? "badge badge-danger d-none": "badge badge-danger"}  alt="Excluir"><span> <FiTrash /> </span> </button>
                </td>
              </tr>
            ))}
        </tbody>
        </table>
      </div>
    );
  
}

export default Clientes;
