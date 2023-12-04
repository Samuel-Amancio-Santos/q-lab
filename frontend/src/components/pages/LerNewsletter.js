import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../Footer";
import api from "../utils/api"; 
import { useParams } from "react-router-dom";


/* hooks */

const LerNewsletter = () => {

const [newsletters, setNewsletters] = useState({})
const {id} = useParams()

useEffect (() => {
api.get(`/newsletters/${id}`).then((response) => {
    setNewsletters(response.data.newsletters)
})
}, [id])

    return (
        <>
        <section className="lerNewsletter" style={{ minHeight: '100vh' }} >
          <Container>
            <Row>
                <Col>
                    <div className="lerNewsletter-bx">
                        <h2>
                            {newsletters.title}
                        </h2>
                        
                        <p className="descrip">
                              {newsletters.description}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
        <Footer />
        </>
    );
};


export default LerNewsletter;