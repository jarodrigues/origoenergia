import React, { useState, useEffect } from 'react';
import { FiTrash, FiEdit, FiPlus } from 'react-icons/fi';
import { Link} from 'react-router-dom';
import api from '../../Api';

import './style.css';
const Clients = () =>{

  const [clients, setClients] = useState([]);
  const [delClient, setDelClient] = useState([]); 

  useEffect(() => {
      api.get('clients').then(response => {
        setClients(response.data);
        console.log(response.data);
      });
  }, [delClient]); 

  function responseServer(data){
    alert(data.data.msg);
  }

  function formatData(dt){
    let data = new Date(dt);
    let dataFormatada = ((data.getDate() + 1 )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    return dataFormatada;
  }
async function deleteClient(id){
    
    const idclient = id;
    if (window.confirm("Deseja excluir o registro")) {
      await api.delete(`clients/${idclient}`).then(response => {
        responseServer(response.data);
        
        setDelClient(idclient);
      });
    } else {
      return;
    }
    
}

    return(
      <div className="tblist bd-example">
          <Link to="/newclient" className="btn btn-info">
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
            {clients.map(client => (
              <tr key={client.id}>
                <td>
                  {client.name}
                </td>
                <td>
                  {client.email}
                </td>
                <td>
                  {client.email}
                </td>
                <td>
                  {client.dt_birth}
                </td>
                <td>
                  {client.state.name}
                </td>
                <td>
                  {client.city.name}
                </td>
                <td>
                  
                    <div className="dropdown">
                      <button className="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Planos
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      {client.plans.map(plan => (
                           
                      <span className="dropdown-item">
                        {plan.map ? 'Cliente sem plano': plan.name +' - '+ plan.monthlypayment}
                      </span>
                          
                        ))}
                      </div>
                    </div>
                         
                </td>
                <td>
                  <Link to={`/edit/${client.id}`} className= "badge badge-secondary hi" alt="Editar"><span> <FiEdit /> </span></Link>
                  <button  onClick={() => deleteClient(client.id)} className={client.state.abbr == "SP" && client.free == 1? "badge badge-danger d-none": "badge badge-danger"}  alt="Excluir"><span> <FiTrash /> </span> </button>
                </td>
              </tr>
            ))}
        </tbody>
        </table>
      </div>
    );
  
}

export default Clients;
