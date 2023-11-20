import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import noticia01 from "../../assets/img-qlab/noticia01.png";
import noticia02 from "../../assets/img-qlab/noticia02.png";
import noticia03 from "../../assets/img-qlab/noticia03.png";
import { Container, Col, Row } from 'react-bootstrap';
import colorSharp from "../../assets/img/color-sharp.png"


const NewsletterCards = () => {
  return (
<section className='newsletter-cards'>
  <Container >
    <h2 className="section-title text-center mb-4">Últimas Notícias</h2>
    <Row className='d-flex justify-content-center align-items-center'>
      <Col md={4} className="mb-4 d-flex justify-content-center align-items-center " >

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={noticia01} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. 
            </Card.Text>
            <button>Ler mais</button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4 d-flex justify-content-center align-items-center ">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={noticia02} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button>Ler mais</button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} className="mb-4 d-flex justify-content-center align-items-center ">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={noticia03} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button>Ler mais</button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>     
</section>
  );
}

export default NewsletterCards;