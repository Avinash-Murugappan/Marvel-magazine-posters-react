import {React, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Controller from './components/Controller'
import gridFeatured from './components/gridFeatured';
import Data from './movies'
import {Navbar } from 'react-bootstrap'


function App() {

  const cData = [...Data];
  console.log(cData);

const [Display, setDisplay] = useState('');

const handleFeature = ()=>{
  setDisplay('featured');
}
const handleGrid= ()=>{
  setDisplay('grid');
}
const handleGridFeatured = ()=>{
  setDisplay('gridFeatured');
}


  return (
    <div className="App">
     <Navbar bg="dark" variant="dark" style={{maxHeight:'2.5rem'}} >
    <Navbar.Brand href="/">
     MOVIE MAGAZINE
    </Navbar.Brand>
  </Navbar>
  <div className="btn" >
   <button onClick={handleFeature} >Featured</button>
   <button onClick={handleGrid} >Grid</button>
   <button onClick={handleGridFeatured} >Featured + Grid</button>
   </div>
    <div className="content">
   <Controller Display={Display} setDisplay={setDisplay} cData = {cData}  />
   </div>

    </div>
  );
}

export default App;
