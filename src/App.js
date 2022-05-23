import './App.css';
import { Route , Routes } from 'react-router-dom';


//pages
import Homepage from './components/pages/Homepage';
import Catalog from './components/pages/Catalog';
import Contacts from './components/pages/Contacts';
import Videos from './components/pages/Videos';
import { Layout } from './Layout';
import Category from './components/pages/Category';
import Offer from './components/pages/Offer';

function App() {
  return (
      <div className="App">

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Homepage />}/>
          <Route path='catalog/' element={<Catalog />} />
          <Route path='catalog/:categoryId' element={<Category/>}/>
          <Route path='catalog/:categoryId/:offerId' element={<Offer/>}/>
          <Route path='contacts' element={<Contacts />} />
          <Route path='videos' element={<Videos />} />
        </Route>

      </Routes>

    </div>
  );
}
let x = <Homepage/>
console.log(x)
export default App;
