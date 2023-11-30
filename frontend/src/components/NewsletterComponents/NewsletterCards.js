import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import noticia01 from "../../assets/img-qlab/noticia01.png";
import noticia02 from "../../assets/img-qlab/noticia02.png";
import noticia03 from "../../assets/img-qlab/noticia03.png";
import { Container, Col, Row } from "react-bootstrap";
import colorSharp from "../../assets/img/color-sharp.png";
import { Link } from "react-router-dom";
import LerNewsletter from "../pages/LerNewsletter";

import api from "../utils/api";
import { useState, useEffect } from "react";

const NewsletterCards = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    api.get("/newsletters").then((response) => {
      setNewsletters(response.data.newsletters);
    });
  }, []);

  return (
    <section className="newsletter-cards">
      <Container>
        <h2 className="section-title text-center mb-4">Últimas Notícias</h2>
        <Row className="d-flex justify-content-center align-items-center">
          {newsletters.length > 0 &&
            newsletters.map((newsletter) => (
              <Col
                md={4}
                className="mb-4 d-flex justify-content-center align-items-center "
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={newsletter.image} />
                  <Card.Body>
                    <Card.Title>{newsletter.title}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Link to={`${newsletter._id}`}><button>Ler Mais</button></Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          {newsletters.length === 0 && <p>Não a noticias Ciradas</p>}

          
        </Row>
      </Container>
    </section>
  );
};

export default NewsletterCards;
