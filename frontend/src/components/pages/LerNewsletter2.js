import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import noticia01 from "../../assets/img-qlab/noticia01.png";
import Footer from "../Footer"
import NewsletterCards from "../NewsletterComponents/NewsletterCards"

/* hooks */

const LerNewsletter2 = () => {


    return (
        <>
        <section className="lerNewsletter" style={{ minHeight: '100vh' }} >
          <Container>
            <Row>
                <Col>
                    <div className="lerNewsletter-bx">
                        <h2>
                            🔮 Revelação Científica: Visualização da Entrelaçamento Quântico! 🔮
                        </h2>

                        <p>
                          Sua noticiaaaaa
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
        <Footer />
        </>
    );
};


export default LerNewsletter2;