
import Card from "react-bootstrap/Card";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


import api from "../utils/api";
import { useState, useEffect } from "react";

const NewsletterCards = () => {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    api.get("/newsletters").then((response) => {
      setNewsletters(response.data.newsletters)
      console.log(newsletters)
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
                    <Card.Text>  {newsletter.description.length > 100
                     ? `${newsletter.description.substring(0, 100)}...`
                      : newsletter.description}
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
