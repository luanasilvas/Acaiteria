import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './Styles.global.css';
import 'bootstrap/dist/css/bootstrap.min.css';  //retirar as barras para verificar o css
//muito cuidado com essa parte pois qualquer alteração é sensivel a quebrar o codigo, importações do css basico ficam aqui
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
