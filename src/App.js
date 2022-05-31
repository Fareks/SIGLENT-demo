import './App.css';
import { Route , Routes } from 'react-router-dom';

import offersJSON from "./json-data/offers.json"
//pages
import Homepage from './components/pages/Homepage';
import Catalog from './components/pages/Catalog';
import Contacts from './components/pages/Contacts';
import Videos from './components/pages/Videos';
import { Layout } from './Layout';
import Category from './components/pages/Category';
import Offer from './components/pages/Offer';
import { useEffect, useState } from 'react';

function App() { 
  
    function getOfferData (currentId) {
     
      return (offersJSON.filter(item => item.id === currentId)[0]);
    }
    
  return (
    
      <div className="App">

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage />}/>
          <Route path='catalog/' element={<Catalog />} />
          <Route path='catalog/:categoryId' element={<Category all_offers={offersJSON}/>}/>
          <Route path='catalog/:categoryId/:offerId' element={<Offer getOfferData = {getOfferData}/>}/>
          <Route path='contacts' element={<Contacts />} />
          <Route path='videos' element={<Videos />} />
        </Route>

      </Routes>

    </div>
  );
}
export default App;
