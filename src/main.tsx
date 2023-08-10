import React from 'react'
import ReactDOM from 'react-dom/client'
// componentes
import Home from './pages/Home'
//estilização global
import "./index.css";
import listaServicos from './pages/ListaServicos';
import Footer from './components/Footer';
import Header from './components/Header'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <Header />
   <Home /> 
   <Footer /> 
   {/* <listaServicos /> */}
  </React.StrictMode>,
)
