import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Add from './components/Add';
import Task from './components/Task';
import Complete from './components/Complete';
import About from './components/About';
import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <div>
    <div className='routerwrap'>
    <BrowserRouter>
    <main className='maincontent'>
    <h1>Tech archive</h1>
    <Routes>
      <Route path="/"  element={<Add/>}   />
      <Route path="/task" element={<Task/>} />
      <Route path="/complete" element={<Complete/>} />
      <Route path="/About" element={<About/>} />
    </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
    </div>
  </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
