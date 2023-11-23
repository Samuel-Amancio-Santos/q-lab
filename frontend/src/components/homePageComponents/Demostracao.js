import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from '../../assets/img/color-sharp.png'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {ArrowRightCircle} from 'react-bootstrap-icons'

export const Demostracao = () => {

  const codeString = `#imports
from braket.circuits import Circuit
from braket.aws import AwsDevice
    
#hello many worlds
  
circ = Circuit()
  
circ.h(1)
  
circ.cnot(control=1, target=0)`;


  const Qiskit = `#hello many worlds
qc = QuantumCircuit(2, 2)
qc.h(0)
  
qc.cx(0, 1)
  
qc.measure([0, 1],[0, 1])
  
#run on IonQ hardware
  
ionq = provider.get_backend("qlab_simulator")`;

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
                        <div className="skill-bx text-center">

                            <h2>
                                Demostrações
                            </h2>
                            <p>Desvende o potencial da computação quântica através das nossas demonstrações interativas. Explore algoritmos, qubits e entrelaçamento, proporcionando uma experiência cativante e educativa para entusiastas, estudantes e profissionais em busca de insights no mundo quântico. </p>
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
                               {Qiskit}
                           </SyntaxHighlighter>
                                </div>

                            </Carousel>

                            <a href="../DemoPage"> <button>Demostrações <ArrowRightCircle size={35} className="seta" /> </button> </a>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
    
}