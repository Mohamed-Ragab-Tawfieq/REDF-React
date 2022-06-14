import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.tsx';
import Header from './Components/Header/Header.tsx';
import SideMenu from './Components/SideMenu/SideMenu.tsx';

import './assets/scss/index.css';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Header />} />
        <Route index element={<SideMenu />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
