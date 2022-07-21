import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Error from './component/error';
import User from './component/user';
import SignUp from './component/signup';
import FPass from './component/forgotpassword';
import Default from './component/default';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App/>}/>
      </Routes>
      <Routes>
        <Route path='/user' element={<User />}/>
      </Routes>
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Routes>
        <Route path='/newpass' element={<FPass/>}/>
      </Routes>
      <Routes>
        <Route path='/error' element={<Error/>}/>
      </Routes>
      <Routes>
        <Route path='/default' element={<Default/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
