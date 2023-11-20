import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons'
import HeaderImg from "../../assets/img/header-img.svg"


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Company"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect (() => {
        let ticker = setInterval(() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagLine">Bem-Vindo a</span>
                        <h1>{`Q-LAB `}<span className="wrap">{text}</span></h1>
                        <p>
                        Bem-vindo ao Q-LAB, sua porta de entrada para o futuro da computação quântica! Em um mundo onde a inovação é a chave para o progresso, 
                        a Q-LAB está na vanguarda, impulsionando as fronteiras da tecnologia quântica. Somos uma empresa fictícia dedicada à pesquisa, desenvolvimento
                         e aplicação prática de soluções de computação quântica, transformando desafios complexos em oportunidades inovadoras.
                        </p>
                       <a href="#connect"> <button onClick={() => console.log('connect')}>Entre em Contato <ArrowRightCircle size={25} /> </button> </a>
                    </Col>
               
                </Row>
            </Container>
        </section>
    )
}