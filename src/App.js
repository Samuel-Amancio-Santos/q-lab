import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './components/Skills';
import { Newsletter } from './components/Newslatter';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Newsletter />

    </div>
  );
}

export default App;
