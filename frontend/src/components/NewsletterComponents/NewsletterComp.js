import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import noticia01 from "../../assets/img-qlab/noticia01.png";
import noticia02 from "../../assets/img-qlab/noticia02.png";
import noticia03 from "../../assets/img-qlab/noticia03.png";

const NewsletterComp = () => {
  return (
<section className="newsletter-cmp">
    
    <Carousel fade controls={true} indicators={false}>
      <Carousel.Item>
        <img src={noticia01} className="carousel-img"/>
        <Carousel.Caption className="text-carousel">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={noticia02} className="carousel-img" />
        <Carousel.Caption className="text-carousel">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={noticia03} className="carousel-img" />
        <Carousel.Caption className="text-carousel">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


</section>

      
      
  
  );
};

export default NewsletterComp;
