import { Container, Row, Col, Form,} from 'react-bootstrap';
import { useState, useContext } from "react";
import contactImg from "../../assets/img/contact-img.svg";

import Input from '../form/input';

//context teste
import { Context } from '../context/UserContext';



export const LoginSection = () => {
  const [user, setUser] = useState({})
  const {login} = useContext(Context);

    function handleChange(e){

      setUser({...user, [e.target.name]: e.target.value});
      console.log(user)

    }

    function handleSubmit(e){
        e.preventDefault();
        login(user);
    }
    
      return (
   
  <section className='login' style={{ minHeight: '100vh' }} >
   <Container>
     <Row className=' align-items-center'>
      
                <img className="img1" src={contactImg} alt="contact" />
         
         
              <div className="login_form_container">
                <div className="login_form">
                  <h2 className="text-center">Login</h2>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group  controlId="formBasicEmail">

                    <Input className="input_text" text="E-mail" type="email" name="email" placeholder="Digite o seu email" handleOnChange={handleChange}></Input>
                    </Form.Group>
                    <Form.Group  controlId="formBasicSenha">

                    <Input className="input_text" text="Senha" type="password" name="password" placeholder="Digite a sua senha" handleOnChange={handleChange} ></Input>
                    </Form.Group>
                    
                  <div className="login_entrar">      

                  <input type="submit" value = "Entrar" className="text-decoration-none" id="login_button"/>
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