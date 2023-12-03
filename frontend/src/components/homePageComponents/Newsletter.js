import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import api from "../utils/api";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Newsletter = () => {

  const [newsletters, setNewsletters ] = useState([]);
    
  useEffect(() => {

      api.get('/newsletters').then((response) => {
          setNewsletters(response.data.newsletters);
      })

  }, []);

  return (
    <section className="newsletter" id="newsletter">
      <Container>
        <Row>
          <Col>
            <div className="newsletter-bx">
              
              <h2>Newsletter</h2>
              <Carousel fade controls={true} indicators={true}>
              
                {newsletters.length > 0 && 
                    newsletters.map((newsletter) => (
                      <Carousel.Item> 
                            <img src={newsletter.image}  className="carousel-img-nl"></img>
                            <Carousel.Caption>
                              <h3>{newsletter.title}</h3>
                              <Link className="verMais" to={`/newsletterpage`}>Ver Mais</Link>
                            </Carousel.Caption>
                      </Carousel.Item>
                    ))
                }
                {newsletters.length === 0 && (
                    <p>Não a noticias Ciradas</p>
                )}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
