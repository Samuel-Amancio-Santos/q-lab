import { Col, Container, Row } from "react-bootstrap"
import noticia01 from "../../assets/img-qlab/noticia01.png";
import noticia02 from "../../assets/img-qlab/noticia02.png";
import noticia03 from "../../assets/img-qlab/noticia03.png";
import Carousel from 'react-bootstrap/Carousel';


export const Newsletter = () => {




    return (
        <section className="newsletter" id="newsletter">
        <Container>
            <Row>
                <Col>
                    <div className="newsletter-bx">

                        <h2>
                            Newsletter
                        </h2>
                        <Carousel fade controls={true} indicators={true}>
      <Carousel.Item>
        <img src={noticia01} className="carousel-img-nl"/>
        <Carousel.Caption >
          <h3 >First slide label</h3>
          <p > augue mollis interdum  <button>ver mais</button>  .</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={noticia02} className="carousel-img-nl " />
        <Carousel.Caption >
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet,<button>ver mais</button> .</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={noticia03} className="carousel-img-nl" />
        <Carousel.Caption >
          <h3>Third slide label</h3>
          <p>
            Praesent commodo <button>ver mais</button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
                        
                    </div>
                </Col>
            </Row>
        </Container>

    </section>

    )
}