import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Home from './containers/Home/home';
import NewJob from './containers/New-jobTracker/NewJob';

function App() {
  return (
      <div className='container'>
        <Route exact path="/" component={Home}/>
        <Route path="/new-track" component={NewJob}/>
    </div>
  );
}

export default App;
