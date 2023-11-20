import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../../assets/img/color-sharp.png'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const Demostracao = () => {

  const codeString = `
  #imports

  from braket.circuits import Circuit
  
  from braket.aws import AwsDevice
  
  
  #hello many worlds
  
  circ = Circuit()
  
  circ.h(1)
  
  circ.cnot(control=1, target=0)`;

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
                                <SyntaxHighlighter className="codeDemo"
                             language="python"
                             style={atelierDuneDark}
                               showLineNumbers  >
                               {codeString}
                           </SyntaxHighlighter>
                                </div>
                                <div className="item">
                                <SyntaxHighlighter className="codeDemo"
                             language="python"
                             style={atelierDuneDark}
                               showLineNumbers  >
                               {codeString}
                           </SyntaxHighlighter>
                                </div>
                                <div className="item">
                                <SyntaxHighlighter className="codeDemo"
                             language="python"
                             style={atelierDuneDark}
                               showLineNumbers  >
                               {codeString}
                           </SyntaxHighlighter>
                                </div>
                                <div className="item">
                                <SyntaxHighlighter className="codeDemo"
                             language="python"
                             style={atelierDuneDark}
                               showLineNumbers  >
                               {codeString}
                           </SyntaxHighlighter>
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