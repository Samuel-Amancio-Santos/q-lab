import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import DemoPage from './components/pages/DemoPage';
import HomePage from './components/pages/HomePage';
import NewsletterPage from './components/pages/NewsletterPage';



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
        </Routes>

      </div>
    </BrowserRouter>
 
  );
}

export default App;
