import React from 'react';
import { Link } from "react-router-dom";
import TrackList from '../../components/TrackList';
import "./home.css";

function home() {
    return (
    <div className="App">
      <header className="App-header">
        <h1>Job Tracker</h1>
      </header>
      <TrackList />
      <div className="new-track">
        <Link to="/new-track"><button className="btn-new">New Job</button></Link>
      </div>
    </div>
    )
}

export default home
