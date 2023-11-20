import { Col, Container, Row } from "react-bootstrap"
import person1 from '../../assets/person/person1.jpeg'
import person2 from '../../assets/person/person2.jpeg'
import person3 from '../../assets/person/person3.jpeg'
import person4 from '../../assets/person/person4.jpeg'
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
                    <img src={person1} alt="Image" className="img-fluid" />
                    <h5>Ana Silva</h5>
                    <p> Engenheira de Software Quântico Sênior
                    </p>
                </div>
            </Col>
            <Col md={6} sm={6}>
                <div className="item-time1">
                    <img src={person2} alt="Image" className="img-fluid" />
                    <h5>Sophia Oliveira</h5>
                    <p> Cientista de Dados Quânticos
                    </p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={6} sm={6}>
                <div className="item-time1">
                    <img src={person3} alt="Image" className="img-fluid" />
                    <h5>Lucas Santos</h5>
                    <p>  Desenvolvedor de Algoritmos Quânticos 
                    </p>
                </div>
            </Col>
            <Col md={6} sm={6}>
                <div className="item-time1">
                    <img src={person4} alt="Image" className="img-fluid" />
                    <h5>Gabriel Costa</h5>
                    <p> Arquiteto de Sistemas Quânticos 
                    </p>
                </div>
            </Col>
        </Row>
    </Container>
    <img className="background-image-left" src={colorSharp} />
</section>
    )
}