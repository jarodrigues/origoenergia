import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Cliente  from './pages/Cliente';
import Form  from './pages/Cliente/form';
import EditaCliente from './pages/Cliente/EditaCliente';
import Dashboard  from './Dashboard';
import Header from './Header';


const Routes = () => {
    return (
        <div>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route component={Dashboard} path='/' exact />
                <Route component={Cliente} path='/clientes' />
                <Route component={Form} path='/novocliente' />
                <Route path="/edit/:id" component={EditaCliente}/> 
            </Switch>
        </BrowserRouter>
        </div>
    );
}


export default Routes;