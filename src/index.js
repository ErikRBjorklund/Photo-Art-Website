import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Art from './routes/Art';
import About from './routes/About';
import Commissions from './routes/Commissions';
import Store from './routes/Store';
import Checkout from './routes/Checkout'
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // Requirements:
  // react-bootstrap@2.6.0
  // react-dom@18.2.0
  // react-router-dom@6.4.4
  // react-scripts@5.0.1
  // react@18.2.0
  // web-vitals@2.1.4
  // @mui/material@5.10.16
  
<BrowserRouter>
<Routes>
  <Route path="/" element={<App/>}/>
  <Route path="/art" element={<Art/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/commissions" element={<Commissions/>}/>
  <Route path="/store" element={<Store/>}/>
  <Route path="/checkout" element={<Checkout/>}/>
  </Routes>
</BrowserRouter>


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
