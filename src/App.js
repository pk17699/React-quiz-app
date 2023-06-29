import React from 'react';
import './App.css';
import LeaderBoard from './Component/LeaderBoard';
import 'h8k-components';
import { BrowserRouter as Router } from "react-router-dom";

const title = "SPA - LeaderBoard";

function App() {
	return (
    <Router>
      <div className="App">
        <h8k-navbar header={title}></h8k-navbar>
        <LeaderBoard />
      </div>
    </Router>
	);
}

export default App;
