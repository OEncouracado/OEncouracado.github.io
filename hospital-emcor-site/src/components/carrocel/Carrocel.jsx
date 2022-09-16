import Carousel from 'react-bootstrap/Carousel';
import frente2 from "../../images/frente2.jpg";
import conforto from "../../images/conforto.jpeg";
import tecnologia from "../../images/tecnologia.jpg";
import "./carousel.css"
import { useEffect } from 'react';

export default function CarouselFade() {

    useEffect(() => {
        var anoFundacao = '1989'
        var data = new Date();
        var ano = data.getFullYear();       // 4 dígitos
        var result = (ano) - (anoFundacao);
        
        document.getElementById("idade").innerHTML = (result)
    });

  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          height={400}
          src={frente2}
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>No Centro de Nova Iguaçu</h3>
          <p>Há <span id='idade' /> cuidando do coração da baixada.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          height= {400}
          src= {conforto}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Conforto</h3>
          <p>Conforto do paciente em primeiro lugar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          height={400}
          src={tecnologia}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tecnologia</h3>
          <p>Buscando Sempre a melhor Tecnologia.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
