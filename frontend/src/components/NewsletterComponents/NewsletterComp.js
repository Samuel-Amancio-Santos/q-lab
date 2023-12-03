import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import noticia02 from "../../assets/img-qlab/noticia02.png";
import noticia07 from "../../assets/img-qlab/noticia07.png";

const NewsletterComp = () => {
  return (
<section className="newsletter-cmp">
    
    <Carousel fade controls={true} indicators={false}>
      <Carousel.Item>
        <img src={noticia07} className="carousel-img"/>
        <Carousel.Caption className="text-carousel">
          <h3 className="text-fluid" >🔮 Revelação Científica: Visualização da Entrelaçamento Quântico! 🔮</h3>
          <p className="text-md" ></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={noticia02} className="carousel-img" />
        <Carousel.Caption className="text-carousel">
          <h3>🚀 Bem-Vindos à Quantum News! 🌌</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


</section>

      
      
  
  );
};

export default NewsletterComp;
