import { Col, Container, Row } from "react-bootstrap"
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import colorSharp from "../../assets/img/color-sharp.png"

export const Time = () => {



    return (
<section className="time" id="time">
    <Container className="time-bx1">
        <Row>
            <Col>
                <div className="text-center">
                    <h2>Time</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={6}>
                <div className="item-timel">
                    <img src={projImg1} alt="Image" className="img-fluid" />
                    <h5>Web Development</h5>
                    <p> text text 
                    </p>
                </div>
            </Col>
            <Col md={6} sm={6}>
                <div className="item-time1">
                    <img src={projImg2} alt="Image" className="img-fluid" />
                    <h5>Brand Identity</h5>
                    <p> text text 
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={6}>
                <div className="item-time1">
                    <img src={projImg3} alt="Image" className="img-fluid" />
                    <h5>Logo Design</h5>
                    <p> text text 
                    </p>
                </div>
            </Col>
            <Col md={6} sm={6}>
                <div className="item-time1">
                    <img src={projImg3} alt="Image" className="img-fluid" />
                    <h5>Logo Design</h5>
                    <p> text text 
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
    <img className="background-image-left" src={colorSharp} />
</section>
    )
}