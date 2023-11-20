import React, { useState } from "react";
import { Container, Row, Col, Form } from 'react-bootstrap';
import contactImg from "../../assets/img/contact-img.svg";
import Footer from "../Footer";

export const Inscrição = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your authentication logic here, for example, checking if the user and password are valid.
    // For demonstration purposes, I'm just logging the values for now.
    console.log('Nome:', nome);
    console.log('Telefone:', telefone);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('Confirmar Senha:', confirmSenha);
  };

  return (
    <>
    <div className="AppI">
      <Container>
        <Row className="mt-3 mb-3">
          <Col xs={12} md={6}>
            <img className="img1" src={contactImg} alt="contact" />
          </Col>
          <Col xs={12} md={6}>
            <div className="login_form_containerI">
              <div className="login_formI">
                <h2 className="text-centerI">Inscrição</h2>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-1" controlId="formBasicNome">
                    <input
                      type="text"
                      placeholder="Nome"
                      className="input_textI"
                      autoComplete="off"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicTelefone">
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="input_textI"
                      autoComplete="off"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicEmail">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input_textI"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicSenha">
                    <input
                      type="password"
                      placeholder="Senha"
                      className="input_textI"
                      autoComplete="off"
                      value={senha}
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-1" controlId="formBasicConfirmSenha">
                    <input
                      type="password"
                      placeholder="Confirmar Senha"
                      className="input_textI"
                      autoComplete="off"
                      value={confirmSenha}
                      onChange={(e) => setConfirmSenha(e.target.value)}
                    />
                  </Form.Group>
                  <div className="login_entrarI">     
                  <a href="./login" className="text-decoration-none" id="login_button">
                  Concluído
                  </a>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <Footer />
    </>
  );
}

export default Inscrição;