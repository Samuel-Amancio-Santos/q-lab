import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import DemoPage from './components/pages/DemoPage';
import HomePage from './components/pages/HomePage';
import NewsletterPage from './components/pages/NewsletterPage';
import Login from './components/pages/Login';
import Inscrição from './components/pages/Inscrição';
import LerNewsletter from './components/pages/LerNewsletter';
import Teste from './components/pages/Teste.js';



function App() {
  return (
    
 
    <BrowserRouter>
    
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/homepage' element={<HomePage />}></Route>
          <Route path='/demopage' element={<DemoPage />}></Route>
          <Route path='/newsletterpage' element={<NewsletterPage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/inscrição' element={<Inscrição />}></Route>
          <Route path='/lernewsletter' element={<LerNewsletter />}></Route>
          <Route path='/teste' element={<Teste />}></Route>

        </Routes>

      </div>
    </BrowserRouter>
 
  );
}

export default App;
