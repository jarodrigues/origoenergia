import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import api from '../../Api';
 
const EditaCliente = (props) => {
    const idProps = props.match.params.id;

    //const [values, setValues] = useState([]);
    // bucas o cliente e seta o estado uf e cidade
    useEffect(() => {
        api.get(`clientes/${idProps}`).then(response => {
            setFormDate(response.data.data);
            setSelectedUf(response.data.data.estado);
            setSelectedCity(response.data.data.cidade);
            setCheckPlane(response.data.data.plano);
            console.log(response.data);
        });
    }, [idProps]);
    // estado ufs
    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [planes, setPlanes] = useState([]);
    

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [checkedPlane, setCheckPlane] = useState([]);


    const [formDate, setFormDate] = useState({
        nome: '',
        email: '',
        telefone: '',
        dt_nascimento: ''
    });

    // busca OS PLANOS
    useEffect(() => {
        api.get('planos').then(response => {
            setPlanes(response.data);
        });
    }, []);

    // busca todos os estados
    useEffect(() => {
        api.get('states').then(response => {
            setUfs(response.data);
        });
    }, []);

    // busca as cidades pelo estado selecionado
    useEffect(() => {
        if(selectedUf === '0') {
            return;
        }
        api.get(`cities/${selectedUf}`).then(response => {
            setCities(response.data);
        }); 
    }, [selectedUf]);

    function handleSelectUf(e){
        //console.log(e.target.value);
        const uf = e.target.value;
        setSelectedUf(uf);
    }

    function handleSelectCity(e){
        //console.log(e.target.value);
        const city = e.target.value;
        setSelectedCity(city);
    }

    function handleInputChange(e){
        //console.log(e.target.name, e.target.value);
        const { name, value } = e.target;
        setFormDate({ ...formDate, [name]: value });
    }

    function handCheckPlane(){
        var aChk = document.getElementsByName('planos');
        const d = aChk.length;
 
        const checados = [];
        for (var i=0; i < d; i++){
            if (aChk[i].checked == true){
                checados.push(aChk[i].value);
                //faça isso
                // para pegar o valor é aChk[i].value
            }
        } 
        setCheckPlane(checados);
    }


    function validaCheck(param){
        
        var aChk = document.getElementsByName('planos');
        const d = aChk.length;
        const p = param.length;
        //console.log(param);
        const checados = [];
        for (var i=0; i < d; i++){

            for (var j=0; j < p; j++){

                if (aChk[i].value == param[j]){
                    aChk[i].checked = true;
                    //checados.push(aChk[i].value);
                }

            }
        } 
        
    }
    // checa os planos que o cliente ja possui
    validaCheck(checkedPlane);

    function responseData(params){
        alert(params.msg);
        <Redirect to="/somewhere/else" />
    }

    async function handleSubimit(e){
        e.preventDefault();
        
        const { nome, email, telefone, dt_nascimento } = formDate;
        const estado = selectedUf;
        const cidade = selectedCity;
        const plano = checkedPlane;
        
        
        const data = {
            nome,
            email,
            telefone,
            estado,
            cidade,
            dt_nascimento,
            plano
        };

        if(idProps){
            await api.put(`clientes/${idProps}`, data).then(response => {
                responseData(response.data);
            });
        } else {
            await api.post('clientes', data).then(response => {
                responseData(response.data);
            });
        }
    }
   
    return (
        <div id="page-create-point">
            <header>
                {/*<img src={logo} alt="Ecoleta"/> */}
                <Link to="/clientes">
                    <FiArrowLeft />
                    Voltar para Lista de Clientes
                </Link>
            </header>

            <form onSubmit={handleSubimit}>
                <h1>Cadastro de Cliente</h1>

                <fieldset>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="nome">Nome da entidade</label>
                            <input type="text" name="nome" id="nome"  onChange={handleInputChange} value={formDate.nome}/>
                        </div>
                        <div className="field">
                            <label htmlFor="dt_nascimento">Nome da entidade</label>
                            <input type="text" name="dt_nascimento" id="dt_nascimento" onChange={handleInputChange}  value={formDate.dt_nascimento}/>
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email"  onChange={handleInputChange}  value={formDate.email} />
                        </div>
                        <div className="field">
                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" name="telefone" id="telefone"  onChange={handleInputChange}  value={formDate.telefone} />
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
                                <option value="0">Selecione uma UF</option>
                                {ufs.map(uf => (
                                    <option key={uf.id} value={uf.id}>{uf.name}</option>
                                ))};
                            </select>
                        </div>
                                 
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city" value={selectedCity} onChange={handleSelectCity}>
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city => (
                                    <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                        
                    </div>
                </fieldset>

                <fieldset>
                    <legend>O plano é opicional</legend>
                    {planes.map(plane => (
                        <div key={plane.id} className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="planos" name="planos" value={plane.id} 
                            onClick={handCheckPlane} 
                            />
                            <label className="form-check-label" htmlFor="planos">{plane.nome}</label>
                        </div>
                    ))}
                </fieldset>

               <button type="submit">
                   Cadastrar ponto de coleta
               </button>
            </form>

        </div>
    );
}


export default EditaCliente;