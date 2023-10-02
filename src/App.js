import logo from './logo.svg';
import './App.css';
import './UltimasNewsletter.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import DemoPage from './components/pages/DemoPage';
import HomePage from './components/pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <NavBar />
         <Routes>
              <Route path='/homepage' element={<HomePage/>}></Route>
              <Route path='/demopage' element={<DemoPage/>}></Route>
         </Routes>

      </div>
    </BrowserRouter>
 
  );
}

export default App;
