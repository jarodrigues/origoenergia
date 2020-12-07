import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import api from '../../Api';
 
const NewClient = () => {
    // estado ufs
    const [redirectTo, setRedirectTo] = useState(false);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [plans, setPlans] = useState([]);
    

    const [selectedState, setSelectedState] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [checkedPlan, setCheckPlan] = useState([]);


    const [formDate, setFormDate] = useState({
        name: '',
        email: '',
        phonenumber: '',
        dt_birth: ''
    });

    // busca OS PLANOS
    useEffect(() => {
        api.get('plans').then(response => {
            setPlans(response.data);
        });
    }, []);

    // busca todos os estados
    useEffect(() => {
        api.get('states').then(response => {
            setStates(response.data);
        });
    }, []);

    // busca as cidades pelo estado selecionado
    useEffect(() => {
        if(selectedState === 0) {
            return;
        }
        api.get(`cities/${selectedState}`).then(response => {
            setCities(response.data);
        }); 
    }, [selectedState]);

    function handleSelectState(e){
        //console.log(e.target.value);
        const state = e.target.value;
        setSelectedState(state);
    }

    function handleSelectCity(e){
        //console.log(e.target.value);
        const city = e.target.value;
        setSelectedCity(city);
    }

    function handleInputChange(e){
        const { name, value } = e.target;
        setFormDate({ ...formDate, [name]: value });
    }

    function handCheckPlan(){
        var aChk = document.getElementsByName('plans');
        const d = aChk.length;
 
        const checados = [];
        for (var i=0; i < d; i++){
            if (aChk[i].checked == true){
                checados.push(aChk[i].value);
                //faça isso
                // para pegar o valor é aChk[i].value
            }
        } 
        setCheckPlan(checados);
    }

    function responseData(params){
        let bol = true;
        if(params.code == 201){
            bol = false;
        }
        alert(params.msg);
        setRedirectTo(bol);
    }

    async function handleSubimit(e){
        e.preventDefault();
        
        const { name, email, phonenumber, dt_birth } = formDate;
        const state_id = selectedState;
        const city_id = selectedCity;
        const plan = checkedPlan;
        
        
        const data = {
            name,
            email,
            phonenumber,
            state_id,
            city_id,
            dt_birth,
            plan
        };

        await api.post('clients', data).then(response => {
            responseData(response.data);
        });
    }
   
    return (
        <div id="page-create-point">
            <header>
                {/*<img src={logo} alt="Ecoleta"/> */}
                <Link to="/clientes">
                    <FiArrowLeft />
                    Voltar para Lista de Clientes
                </Link>
                { redirectTo && <Redirect to='/clients' />}
            </header>

            <form onSubmit={handleSubimit}>
                <h1>Cadastro de Cliente</h1>

                <fieldset>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="name">Nome da entidade</label>
                            <input type="text" name="name" id="name" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="dt_birth">Data de nascimento</label>
                            <input type="date" name="dt_birth" id="dt_birth" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email"  onChange={handleInputChange} />
                        </div>
                        <div className="field">
                            <label htmlFor="phonenumber">Telefone</label>
                            <input type="text" name="phonenumber" id="phonenumber"  onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="state">Estado (UF)</label>
                            <select name="state" id="state" value={selectedState} onChange={handleSelectState}>
                                <option value="0">Selecione uma UF</option>
                                {states.map(state => (
                                    <option key={state.id} value={state.id}>{state.name}</option>
                                ))};
                            </select>
                        </div>
                                 
                        <div className="field">
                            <label htmlFor="city">Cidade</label>
                            <select name="city" id="city"value={selectedCity}onChange={handleSelectCity}>
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city => (
                                    <option key={city.id} value={city.id}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                        
                    </div>
                    
                </fieldset>

                <fieldset>
                    <h4>Planos </h4>
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Nome</th>
                            <th scope="col">Mensalidade</th>
                        </tr>
                        </thead>
                        <tbody>
                        {plans.map(plan => (
                            <tr key={plan.id}>
                                <td>
                                    <input className="form-check-input" type="checkbox" id="plans" name="plans" 
                                    value={plan.id} 
                                    onClick={handCheckPlan} />
                                </td>
                                <td>{plan.name}</td>
                                <td>{plan.monthlypayment}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </fieldset>

               <button type="submit">
                   Cadastrar
               </button>
            </form>

        </div>
    );
}


export default NewClient;