import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import {Navbar} from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
