import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {NavbarPag} from '../component/NavbarPag';
import { HomePages } from '../pages/HomePages';
import { ServicioPage } from '../pages/ServicioPage';
import { ClientePages } from '../pages/ClientePages';
import { TecnologiaPages } from '../pages/TecnologiaPages';
import { ContactoPages } from '../pages/ContactoPages';

export const RoutersApp = () => {
  return (
    <>
    <NavbarPag/>
    <Routes>
        <Route path='home' element={<HomePages />} />
        <Route path='servicios' element={<ServicioPage />} />
        <Route path='clientes' element={<ClientePages />} />
        <Route path='tecnologias' element={<TecnologiaPages />} />
        <Route path='contacto' element={<ContactoPages />} />
    </Routes>
    </>
  )
}
