import './App.css';
import { Route , Routes } from 'react-router-dom';
import offersJSON from "./json-data/offers.json"
import React,{lazy, Suspense} from 'react';

//pages
// import Homepage from './components/pages/Homepage';
// import Catalog from './components/pages/Catalog';
// import Contacts from './components/pages/Contacts';
// import Videos from './components/pages/Videos';
import { Layout } from './Layout';
// import Category from './components/pages/Category';
// import Offer from './components/pages/Offer';
// import Autors from './components/pages/Authors-page/autors'
import { useEffect, useState } from 'react';


const Catalog  = React.lazy(() => import('./components/pages/Catalog'));
const Homepage  = React.lazy(() => import('./components/pages/Homepage'));
const Videos  = React.lazy(() => import('./components/pages/Videos'));
const Autors  = React.lazy(() => import('./components/pages/Authors-page/autors'));
const Offer  = React.lazy(() => import('./components/pages/Offer'));
const Category  = React.lazy(() => import('./components/pages/Category'));
const Contacts  = React.lazy(() => import('./components/pages/Contacts'));

function App() { 
const axios  = require('axios');



    function getOfferData (currentId) {
     
      return (offersJSON.filter(item => item.id === currentId)[0]);
    }
    
  return (
    
      <div className="App">
        
        <Suspense fallback={<div className='load'></div>}>
            <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage />}/>
              <Route path='catalog/' element={<Catalog />} />
              <Route path='catalog/:categoryId' 
              element={
                  <Category all_offers={offersJSON}/>
              }/>
              <Route path='catalog/:categoryId/:offerId' element={<Offer getOfferData = {getOfferData}/>}/>
              <Route path='/offer/:offerId' element={<Offer getOfferData = {getOfferData}/>}/>
              <Route path='contacts' element={<Contacts />} />
              <Route path='videos' element={<Videos />} />
              <Route path='authors' element={<Autors />} />
            </Route>
          </Routes>
          </Suspense>
    </div>
  );
}
export default App;
