import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, BrowserRouter } from "react-router-dom";

import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => (
  <Navbar expand="lg" className="scrolled">
    <Container>
      <Navbar.Brand href="#home">
       <Nav.Link href="/homepage" > <h1>Q-LAB</h1> </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/homepage" className="navbar-link">Home</Nav.Link>
          <Nav.Link href="/demopage" className="navbar-link">Demo</Nav.Link>

        </Nav>
        <span className='navbar-text'>
          <div className='social-icon'> 
            <a href='#'>< img src={navIcon1}  alt=""/></a>
            <a href='#'>< img src={navIcon2}  alt=""/></a>
            <a href='#'>< img src={navIcon3}  alt=""/></a>
          </div>
          <button className='vvd'><span>Inscreva-se</span> </button>
          <button className='vvd'><span>login</span> </button>
        </span> 
      </Navbar.Collapse>
    </Container>
  </Navbar>

);