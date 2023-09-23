import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg'
import meter2 from '../assets/img/meter2.svg'
import meter3 from '../assets/img/meter3.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">

                            <h2>
                                Demostrações
                            </h2>
                            <p>orem Ipsum is simply dummy text of the printing <br></br> orem Ipsum is simply dummy text of the printing and typesetting industr and typesetting industr, orem Ipsum is simply </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h3>Demostrações</h3>
                                    <p></p>
                                </div>
                                <div className="item">
                                    <h3>Demostrações</h3>
                                    <p></p>
                                </div>
                                <div className="item">
                                    <h3>Demostrações</h3>
                                    <p></p>
                                </div>
                                <div className="item">
                                    <h3>Demostrações</h3>
                                    <p>Demo</p>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
    
}