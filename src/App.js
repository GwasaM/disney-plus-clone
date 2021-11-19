import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path = "/">
            <Home />
          </Route>
          <Route path = "/detail">
            <Detail />
          </Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;