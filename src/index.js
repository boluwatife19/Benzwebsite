import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Land from './landing/land';
import Loca from './location/location';
import Faq from './faq/faq';
import Formx from './form/form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Land />
    <Loca />
    <Faq />
    <Formx />
  </React.StrictMode>
);
