import { Container, Row, Col, Form,} from 'react-bootstrap';
import "../LoginComponents/login.css"
import React, { useState } from "react";
import contactImg from "../../assets/img/contact-img.svg";
import Footer from '../Footer';
import LoginSection from '../LoginComponents/LoginSection';



export const Login = () => {

      return (
        <>
       <LoginSection />
       </>
   
    );
  }

export default Login;