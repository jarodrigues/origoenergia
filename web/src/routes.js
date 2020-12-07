import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Client  from './pages/Client';
import NewClient  from './pages/Client/NewClient';
import EditClient from './pages/Client/EditClient';
import Dashboard  from './Dashboard';
import Header from './Header';


const Routes = () => {
    return (
        <div>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route component={Dashboard} path='/' exact />
                <Route component={Client} path='/clients' />
                <Route component={NewClient} path='/newclient' />
                <Route path="/edit/:id" component={EditClient}/> 
            </Switch>
        </BrowserRouter>
        </div>
    );
}


export default Routes;