import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './index';
import perfil from "./pages/perfil";
import personagens from "./pages/personagens";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/perfil' component={perfil} />
                <Route path='/personagens' component={personagens} />
            </Switch>
        </BrowserRouter>
    );
};

export default Route();
