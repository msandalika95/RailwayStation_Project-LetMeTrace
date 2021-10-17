import React from 'react';
import './App.css';
import './cssFiles/Admin.css';

import {Route} from 'react-router-dom';

import Admin from './pages/Admin';
import AllVisitors from './components/AllVisitors';

export default function App() {
  return(
    <React.Fragment>
      <Route exact path = "/" component = {Admin}/>
      <Route path = "/visitors" component = {AllVisitors}/>
    </React.Fragment>
  )  
}

