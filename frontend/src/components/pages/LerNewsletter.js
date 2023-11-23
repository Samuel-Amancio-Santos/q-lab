
import { Container, Row, Col } from "react-bootstrap";
import noticia01 from "../../assets/img-qlab/noticia01.png";
import Footer from "../Footer"
import NewsletterCards from "../NewsletterComponents/NewsletterCards"

const LerNewsletter = () => {
    return (
        <>
        <section className="lerNewsletter" style={{ minHeight: '100vh' }} >
          <Container>
            <Row>
                <Col>
                    <div className="lerNewsletter-bx">
                        <h2>
                            Titulo da noticia
                        </h2>

                        <p>
                            informaçoes da noticias Lorem ipsum amet is a great text
                            Lorem ipsum amet is a great text
                            Lorem ipsum amet is a great text
                            Lorem ipsum amet is a great text
                            Lorem ipsum amet is a great text
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