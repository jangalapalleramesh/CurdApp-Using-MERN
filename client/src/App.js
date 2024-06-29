
import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Emplopyee from './Emplopyee';
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Emplopyee/>}/>
        <Route path='/create' element={<CreateEmployee/>}/>
        <Route path='/update/:id' element={<UpdateEmployee/>}/>

      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
