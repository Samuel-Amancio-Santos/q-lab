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
                            Newslatter
                        </h2>
                        <Carousel fade controls={true} indicators={true}>
      <Carousel.Item>
        <img src={noticia01} className="carousel-img-nl"/>
        <Carousel.Caption className="text-carousel-nl">
          <h3 >First slide label</h3>
          <p >Nulla vitae elit libero, a pharetra augue mollis interdum  <button>ver mais</button>  .</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={noticia02} className="carousel-img-nl " />
        <Carousel.Caption className="text-carousel-nl">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={noticia03} className="carousel-img-nl" />
        <Carousel.Caption className="text-carousel-nl">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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