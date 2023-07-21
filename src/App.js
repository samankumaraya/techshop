import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
              <Route path="login" element={<LoginPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
