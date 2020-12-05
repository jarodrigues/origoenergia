import React from 'react';

import logo from './assets/img/logo-origo.svg';

const Dashboard = () => {

    const pStyleLogo = {
        marginTop: '40px'
      };
    const title = { 
        color: '#822b7d'
    }
    return (
        <div className="container text-center" style={pStyleLogo}>
            
            <div  style={title}>
                <h1>
                    Energia limpa para sua casa ou apartamento
                </h1>
            </div>
            <div style={{marginTop:'5%'}}>
                <img src={logo} alt=''></img>
            </div>
        </div>
    );
}

export default Dashboard;
