import React from 'react'
import ReactDOM from 'react-dom/client'

//estilização global
import "./index.css";

// componentes
import Home from './pages/Home'
import ListaDevs from './pages/ListaDevs';
import ListaServicos from './pages/ListaServicos'
import Footer from './components/Footer';
import Header from './components/Header'

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes> {/*Indica uma lista de rotas*/}
        <Route path='/' element={<Home />} />
        <Route path= '/lista/servicos' element= {<ListaServicos />} />
        <Route path= '/lista/devs' element= {<ListaDevs/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
