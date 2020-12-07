import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import api from '../../Api';
 
const EditClient = (props) => {
    const idProps = props.match.params.id;
    const [redirectTo, setRedirectTo] = useState(false);
    //const [values, setValues] = useState([]);
    // bucas o cliente e seta o estado uf e cidade
    useEffect(() => {
        api.get(`clients/${idProps}`).then(response => {
            setFormDate(response.data.data);
            setSelectedState(response.data.data.state_id);
            setSelectedCity(response.data.data.city_id);
            setCheckPlan(response.data.data.plans);
            console.log(response.data);
        });
    }, [idProps]);
    // estado ufs
    const [states, setUfs] = useState([]);
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
            setUfs(response.data);
        });
    }, []);

    // busca as cidades pelo estado selecionado
    useEffect(() => {
        if(selectedState === '0') {
            return;
        }
        api.get(`cities/${selectedState}`).then(response => {
            setCities(response.data);
        }); 
    }, [selectedState]);

    function handleSelectState(e){
        //console.log(e.target.value);
        const uf = e.target.value;
        setSelectedState(uf);
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


    function validaCheck(param){
        
        var aChk = document.getElementsByName('plans');
        const d = aChk.length;
        const p = param.length; 
        for (var i=0; i < d; i++){

            for (var j=0; j < p; j++){
                if (aChk[i].value == param[j].id){
                    aChk[i].checked = true; 
                }
            }
        } 
    }
    // checa os planos que o cliente ja possui
    validaCheck(checkedPlan);

    function responseData(params){
        alert(params.msg);
        setRedirectTo(true);
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

        if(idProps){
            await api.put(`clients/${idProps}`, data).then(response => {
                responseData(response.data);
            });
        } else {
            await api.post('clients', data).then(response => {
                responseData(response.data);
            });
        }
    }
   
    return (
        <div id="page-create-point">
            <header>
                {/*<img src={logo} alt="Ecoleta"/> */}
                <Link to="/clients">
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
                            <input type="text" name="name" id="name"  onChange={handleInputChange} value={formDate.name}/>
                        </div>
                        <div className="field">
                            <label htmlFor="dt_birth">Nome da entidade</label>
                            <input type="date" name="dt_birth"  id="dt_birth" onChange={handleInputChange}  value={formDate.dt_birth}/>
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email"  onChange={handleInputChange}  value={formDate.email} />
                        </div>
                        <div className="field">
                            <label htmlFor="phonenumber">phonenumber</label>
                            <input type="text" name="phonenumber" id="phonenumber"  onChange={handleInputChange}  value={formDate.phonenumber} />
                        </div>
                    </div>
                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id="uf" value={selectedState} onChange={handleSelectState}>
                                <option value="0">Selecione uma UF</option>
                                {states.map(state => (
                                    <option key={state.id} value={state.id}>{state.name}</option>
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
                                onClick={handCheckPlane} />
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


export default EditClient;