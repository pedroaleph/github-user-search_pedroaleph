import Navbar from 'core/components/Navbar';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
    <BrowserRouter>
    <Navbar />
    <Switch>
        <Route path="/" exact>
            {/*Home*/}
        </Route>
        <Route path="/search">
            {/*Search*/}
        </Route>
    </Switch>
    </BrowserRouter>
)

export default Routes;