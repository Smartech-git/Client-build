import React, {useEffect} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import { useLocation } from 'react-router-dom';



function App() {
  let location = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])
  
  return (
    <div className = "App">
      <div className='AppContents'>
        <Header/>
        <Routes>
          <Route path="/"   element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path= "/Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
      </div> 
    </div>
   
  );
}

export default App;
