import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {PagesApps} from './PagesApps';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <PagesApps/>
    </BrowserRouter>
  </React.StrictMode>,
)
