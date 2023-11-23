import { Container, Row, Col, Form,} from 'react-bootstrap';
import React, { useState } from "react";
import contactImg from "../../assets/img/contact-img.svg";
import Footer from '../Footer';
import { Link } from "react-router-dom";


export const LoginSection = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
  
    const handleLogin = (e) => {
      e.preventDefault();
      // Adicione aqui a lógica de autenticação, por exemplo, verificar se o usuário e a senha são válidos.
      // Você pode usar uma API, autenticar no servidor, ou qualquer outra lógica necessária.
      // Aqui, estou apenas exibindo os valores do usuário e senha para fins de demonstração.
      console.log('Email:', email);
      console.log('Senha:', senha);
    };
    

      return (
   
  <section className='login' style={{ minHeight: '100vh' }} >
   <Container>
     <Row className=' align-items-center'>
      
                <img className="img1" src={contactImg} alt="contact" />
         
         
              <div className="login_form_container">
                <div className="login_form">
                  <h2 className="text-center">Login</h2>

                  <Form onSubmit={handleLogin}>
                    <Form.Group  controlId="formBasicEmail">
                    <input
                      type="email"
                      placeholder="Email"
                      class="input_text"
                      autocomplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group  controlId="formBasicSenha">
                    <input
                    type="senha"
                    placeholder="Senha"
                    class="input_text"
                    autocomplete="off"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    />
                    </Form.Group>
                    
                  <div className="login_entrar">      
                  <a href="./homepage" className="text-decoration-none" id="login_button">
                  Entrar
                  </a>
                  </div>
                  </Form>
                  
                  <div className="rodape1">
                    <a href="#" className=" text-decoration-none">
                      Esqueceu a Senha?
                    </a>
           
                    <a href="../Inscrição" className="text-decoration-none">
                      Inscreva-se
                    </a>
              
                  </div>
                </div>
              </div>
        
       </Row>
    </Container>
   </section>
       
   
    );
  }

export default LoginSection;