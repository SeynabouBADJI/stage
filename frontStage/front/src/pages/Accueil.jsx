import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../styles/Accueil.css";

function Accueil() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div>
      <header className="header">
      <ul>
            <li><Link to="/gestion-cours">Gestion des Cours</Link></li>
            {/* <li><Link to="/gestion-departements">Gestion des Départements</Link></li> */}
            <li><Link to="/gestion-ufr">Gestion des UFR</Link></li>
            <li><Link to="/gestion-enseignants">Gestion des Enseignants</Link></li>
            <li><Link to="/gestion-contrats">Gestion des Contrats</Link></li>
          </ul>

      </header>

      <main>
      
        <div className='sections'>
         
        </div>
        {/* <Slider {...carouselSettings} className='carousel-image'>
          <div>
            <img src='/images/i1.png' alt="Slide 1" style={{ height: '300px' }} />
          </div>
          <div>
            <img src="/images/i2.png" alt="Slide 2" style={{ height: '300px' }}/>
          </div>
          <div>
            <img src="/images/i3.png" alt="Slide 3" style={{ height: '300px' }}/>
          </div>
          <div>
            <img src="/images/i4.png" alt="Slide 4" style={{ height: '300px' }}/>
          </div>
        </Slider> */}
      </main>

      <footer className="footer">
        <h4>Copyright © Direction de la Formation Ouverte A Distance | 2024 - Tous droits réservés !,/</h4>
         <h5>Ministère de l'Enseignement Supérieur et de la Recherche (MESR)</h5> 
          <h6>Université Assane Seck de Ziguinchor (UASZ)</h6>

      </footer>
    </div>
  );
}

export default Accueil;
