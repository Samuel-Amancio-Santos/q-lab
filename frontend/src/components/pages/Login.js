import { Container, Row, Col, Form,} from 'react-bootstrap';
import React, { useState } from "react";
import contactImg from "../../assets/img/contact-img.svg";
import Footer from '../Footer';


export const Login = () => {
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
        <>
        <section className='login'>
        <Container>
          <Row className="mt-5 mb-5">
            <Col xs={12} md={6}>
                <img className="img1" src={contactImg} alt="contact" />
            </Col>
            <Col xs={12} md={6}>
              <div className="login_form_container">
                <div className="login_form">
                  <h2 className="text-center">Login</h2>

                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <input
                      type="email"
                      placeholder="Email"
                      class="input_text"
                      autocomplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicSenha">
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
                  
                  <div className="rodape1 mt-3">
                    <a href="#" className=" text-decoration-none">
                      Esqueceu a Senha?
                    </a>
                    <a href="../inscricao" className="text-decoration-none">
                      Inscreva-se
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
       <Footer />
        </>
   
    );
  }

export default Login;