import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// import { Login } from './components/login/login';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(


//   <BrowserRouter>
//     <Login />
//   </BrowserRouter>
// );


import { createRoot } from "react-dom/client"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { Stash } from './components/routes/Stash';



const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <BrowserRouter>

        <Stash />
                
    </BrowserRouter>
)