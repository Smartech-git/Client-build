import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/HeaderComponent/Header';
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'



function App() {
  return (
    <div className = "App">
      <div className='AppContents'>
        <Header/>
        <Routes>
          <Route path="/"   element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path= "/Contact" element={<Contact/>}/>
        </Routes>
      </div> 
    </div>
   
  );
}

export default App;
