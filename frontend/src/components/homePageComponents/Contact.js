import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        nome: '',
        sobreNome: '',
        email: '',
        telefone: '',
        mensagem: ''

    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Enviar');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails ({
            ...formDetails,
            [category]: value
        })
    }

     return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="contact" />
                    </Col>
                    <Col md={6}>
                        <h2>Entre em Contato</h2>
                        <form> 
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.nome} placeholder="Nome" onChange={(e) => onFormUpdate ('nome', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.sobreNome} placeholder="Sobre nome" onChange={(e) => onFormUpdate ('sobreNome', e.target.value)} /> 
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate ('email', e.target.value)} /> 
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.telefone} placeholder="Telefone." onChange={(e) => onFormUpdate ('telefone', e.target.value)} /> 
                                </Col>
                                <Col>
                                    <textarea row="6" value={formDetails.mensagem} placeholder="Mensagem" onChange={(e) => onFormUpdate ('mensagem', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.mensagem}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>
     )


}