import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Destaque from '../pages/Destaque'
import Home from '../pages/Home'

const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/destaque" component={Destaque} />
    </BrowserRouter>
);

export default Routes