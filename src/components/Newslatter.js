import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Newsletter = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    


    return (
        <section className="newsletter" id="newsletter">
        <Container>
            <Row>
                <Col>
                    <div className="newsletter-bx">

                        <h2>
                            Newslatter
                        </h2>
                        <Carousel responsive={responsive} infinite={true} className="newsletter-slider">

                        <div className="item-newsl">
                                <img src={projImg1} alt="Image" />
                                <h5>Web Development</h5>
                                <p> text text text text text text text text
                                text text text text text text text text text text
                                text texttext text  <span>Ver mais</span>
                                </p>
                            </div>
                            <div className="item-newsl">
                                <img src={projImg2} alt="Image" />
                                <h5>Brand Identity</h5>
                                <p> text text text text text text text text
                                text text text text text text text text text text
                                text texttext text  <span>Ver mais</span>
                                </p>
                            </div>
                            <div className="item-newsl">
                                <img src={projImg3} alt="Image" />
                                <h5>Logo Design</h5>
                                <p> text text text text text text text text
                                text text text text text text text text text text
                                text texttext text  <span>Ver mais</span>
                                </p>
                            </div>
                        </Carousel>
                        
                    </div>
                </Col>
            </Row>
        </Container>

    </section>

    )
}