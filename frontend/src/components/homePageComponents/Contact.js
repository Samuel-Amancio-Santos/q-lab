import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";

export const Contact = () => {
    const formInitialDetails = {
        nome: '',
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
                        <form onSubmit={ () => {
                           
                            const mailto = 'contact@q-lab.com';
                              const subject = "Mensagem de contato";
                              const body = `Mensagem: ${formDetails.mensagem};%0D%0AYour Name: ${formDetails.nome}`;
                              window.open(`mailto:${mailto}?subject=${subject}&body=${body}`);
                        }}> 
                            <Row>
                                <Col sm={12} className="px-1">
                                    <input type="text" value={formDetails.nome} placeholder="Nome*" onChange={(e) => onFormUpdate ('nome', e.target.value)} />
                                </Col>


                                <Col className="px-1">
                                    <textarea row="6" value={formDetails.mensagem} placeholder="Mensagem*" onChange={(e) => onFormUpdate ('mensagem', e.target.value)}></textarea>
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