import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import Fade from 'react-bootstrap/Fade';
import { useState } from 'react';




const DemoSection = () => {

  const [open, setOpen] = useState(false);
   


  const codeString = `
  #imports

  from braket.circuits import Circuit
  
  from braket.aws import AwsDevice
  
  
  #hello many worlds
  
  circ = Circuit()
  
  circ.h(1)
  
  circ.cnot(control=1, target=0)
  
  
  #run on IonQ hardware
  
  ionq = AwsDevice("arn:aws:braket:::device/qpu/ionq/ionQdevice")
  
  job = ionq.run(circ, ("my_s3_bucket","my_s3_folder"), shots=100)
  
  print(job.result().measurement_counts)  
`;

  return (
        
           <section className="project">
      <Container>
        <Row>
          <Col size={12}>
              <div className="animate__animated animate__fadeIn">
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Shor</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Qksitr</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Python</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className= "animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                      <Container>
                        <h1 style={{ textAlign: 'center' }} > Shor Code</h1>
                          <SyntaxHighlighter className="codeEx"
                             language="python"
                             style={atelierDuneDark}
                               showLineNumbers  >
                               {codeString}
                           </SyntaxHighlighter>
                    <Container className='demo-info-bx'>
                           <button 
                            className='demo-button'
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                           aria-expanded={open}
                            >
                                  Sobre o codigo
                            </button>
                               <Fade in={open}>
                                <div id="example-fade-text">
                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                  labore wes anderson cred nesciunt sapiente ea proident.</p>
                                </div>
                              </Fade>
                              </Container>
                     </Container>

                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Container>
                        <h1 style={{ textAlign: 'center' }} > Shor Code</h1>
                          <SyntaxHighlighter className="codeEx"
                             language="python"
                             style={atelierDuneDark}
                               showLineNumbers  >
                               {codeString}
                           </SyntaxHighlighter>
                    <Container className='demo-info-bx'>
                           <button 
                            className='demo-button'
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                           aria-expanded={open}
                            >
                                  Sobre o codigo
                            </button>
                               <Fade in={open}>
                                <div id="example-fade-text">
                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                  labore wes anderson cred nesciunt sapiente ea proident.</p>
                                </div>
                              </Fade>
                              </Container>
                     </Container>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Container>
                        <h1 style={{ textAlign: 'center' }} > Shor Code</h1>
                          <SyntaxHighlighter className="codeEx"
                             language="python"
                             style={atelierDuneDark}
                               showLineNumbers  >
                               {codeString}
                           </SyntaxHighlighter>
                    <Container className='demo-info-bx'>
                           <button 
                            className='demo-button'
                            onClick={() => setOpen(!open)}
                            aria-controls="example-fade-text"
                           aria-expanded={open}
                            >
                                  Sobre o codigo
                            </button>
                               <Fade in={open}>
                                <div id="example-fade-text">
                                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                  labore wes anderson cred nesciunt sapiente ea proident.</p>
                                </div>
                              </Fade>
                              </Container>
                     </Container>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default DemoSection;

