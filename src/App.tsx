import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import { Main } from './pages/main/Main';
import { Login } from './pages/Login';
import { CreatePost } from './pages/create-post/CreatePost';

import {Navbar} from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/create-post' element={<CreatePost />}></Route>
          <Route path='*' element={<h1>404 Page Not Found</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
