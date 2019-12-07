import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from "react-router";
import Episodes from "./episodes/Episodes";
import {BrowserRouter} from "react-router-dom";
import Episode from "./episode/Episode";
import Location from "./location/Location";
import Home from "./home/Home";

const routing = (
        <BrowserRouter>
            <Route path="/home" component={App} />
            <Route path="/episodes" component={Episodes}/>
            <Route path="/episode/:id" component={Episode}/>
            <Route path="/locations" component={Location}/>
            <Route exact path="/" component={Home}/>
        </BrowserRouter>
);

ReactDOM.render(routing,
  document.getElementById('root')
);
