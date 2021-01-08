import React from 'react';
import { Link } from "react-router-dom";

function home() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Job Tracker</h1>
      </header>
      <Link to="/new-track"><button>New Job</button></Link>
    </div>
    )
}

export default home
