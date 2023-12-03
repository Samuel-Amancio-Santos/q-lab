import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoPage from "./components/pages/DemoPage";
import HomePage from "./components/pages/HomePage";
import NewsletterPage from "./components/pages/NewsletterPage";
import Login from "./components/pages/Login";
import Inscrição from "./components/pages/Inscrição";
import LerNewsletter from "./components/pages/LerNewsletter";
import Teste from "./components/pages/Teste.js";

import Message from "./components/layout/Message";

// Context
import { UserProvider } from "./components/context/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <NavBar />
          <Message />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/homepage" element={<HomePage />}></Route>
            <Route path="/demopage" element={<DemoPage />}></Route>
            <Route path="/newsletterpage" element={<NewsletterPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/inscrição" element={<Inscrição />}></Route>
            <Route path="/newsletterpage/:id" element={<LerNewsletter />}></Route>
            
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
