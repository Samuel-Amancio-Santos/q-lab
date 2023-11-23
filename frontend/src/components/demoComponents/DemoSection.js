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
  
  
  #run on Q-LAB hardware
  
  qlab = AwsDevice("arn:aws:braket:::device/qpu/ionq/qlaBdevice")
  
  job = ionq.run(circ, ("my_s3_bucket","my_s3_folder"), shots=100)
  
  print(job.result().measurement_counts)  
`;

const qskit = `#imports

from qiskit_ionq import IonQProvider

from qiskit import QuantumCircuit


#hello many worlds

qc = QuantumCircuit(2, 2)

qc.h(0)

qc.cx(0, 1)

qc.measure([0, 1],[0, 1])


#run on IonQ hardware

ionq = provider.get_backend("qlab_simulator")

job = ionq.run(qc, shots=100)

print(job.get_counts())`;




const Cirq = `#imports

import cirq

import cirq.qlab as qlab


#hello many worlds

q0, q1 = cirq.LineQubit.range(2)

circuit = cirq.Circuit()

circuit.append(

 [cirq.H(q0), cirq.CNOT(q0, q1), cirq.measure(q0, q1, key="x")]

)


#run on Q-LAB hardware

service = qlab.Service(api_key="api-key", default_target="qpu")

job = service.run(circuit=circuit, repetitions=100)

print(job.histogram(key="x"))`

  return (
        
           <section className="project">
      <Container>
        <Row>
          <Col size={12}>
              <div className="animate__animated animate__fadeIn">
                <h2>Demostrações</h2>
                <p>Desvende o potencial da computação quântica através das nossas demonstrações interativas. Explore algoritmos, qubits e entrelaçamento, proporcionando uma experiência cativante e educativa para entusiastas, estudantes e profissionais em busca de insights no mundo quântico.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Quantum</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Qiskit</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Cirq</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className= "animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                      <Container>
                        <h1 style={{ textAlign: 'center' }} > QuantumLeap</h1>
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
                                  <p> Este código demonstra como criar e executar um circuito quântico simples usando o SDK da AWS Braket, enviando-o para um dispositivo quântico Q-LAB e exibindo as contagens de medição resultantes. Certifique-se de ter as credenciais da AWS configuradas e as bibliotecas Braket instaladas para executar este código com sucesso.</p>
                                </div>
                              </Fade>
                              </Container>
                     </Container>

                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Container>
                        <h1 style={{ textAlign: 'center' }} > Python Qiskit</h1>
                          <SyntaxHighlighter className="codeEx"
                             language="python"
                             style={atelierDuneDark}
                               showLineNumbers  >
                               {qskit}
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
                                  <p>  este código cria um circuito quântico simples com dois qubits, aplica uma porta Hadamard e uma porta CNOT, mede os qubits e executa o circuito no simulador Q-LAB. Os resultados da medição (contagens) são então impressos. Certifique-se de ter o Qiskit e suas dependências instalados para executar este código com sucesso.</p>
                                </div>
                              </Fade>
                              </Container>
                     </Container>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Container>
                        <h1 style={{ textAlign: 'center' }} > Python Cirq</h1>
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
                                  <p> Este código cria um circuito quântico simples com dois qubits, aplica uma porta Hadamard e uma porta CNOT, mede os qubits e executa o circuito no serviço Q-LAB. Os resultados da medição (histograma) são então impressos. Certifique-se de substituir "api-key" pela sua chave de API Q-LAB e de ter as bibliotecas Cirq e Q-LAB instaladas para executar este código com sucesso.</p>
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

