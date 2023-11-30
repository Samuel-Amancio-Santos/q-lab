
import { Container, Row, Col } from "react-bootstrap";
import noticia01 from "../../assets/img-qlab/noticia01.png";
import Footer from "../Footer"
import NewsletterCards from "../NewsletterComponents/NewsletterCards"

/* hooks */

const LerNewsletter = () => {


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
                          Sua noticia 
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


export default LerNewsletter;