import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Time } from './components/Time'
import { Skills } from './components/Skills';
import { Newsletter } from './components/Newslatter';
import { Contact } from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Newsletter />
        <Time />
        <Contact />
    </div>
  );
}

export default App;
