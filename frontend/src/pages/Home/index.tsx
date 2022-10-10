import NewsPage from 'pages/Home/NewsPage';
import EventsPage from './EventsPage';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from 'AuthContext';
import { Spring, animated } from 'react-spring';
import LogoImg from '../../assets/images/logo.jpeg';
import InstImg from '../../assets/images/insta.png';
import FaceImg from '../../assets/images/face.png';
import LinkImg from '../../assets/images/linke.png';
import CadImg from '../../assets/images/fast.gif';

import './styles.css';

function Home() {
  const { authContextData } = useContext(AuthContext);
  return (
    <div className="home-container">
      <div className="home-img">
        <img src={LogoImg} alt="Logo" className="logo-img" />
      </div>
      {authContextData.authenticated && (
        <div className="gif-button">
          <img src={CadImg} alt="" className="gif-button-img" />
          <div className="dropdown">
            <button className="btn btn-danger btn-home-events">CADASTRE</button>
            <div className="dropdown-content">
              <Link to="/events/create">
                <span className="dropdown-text">EVENTOS</span>
              </Link>
              <Link to="/events/news/create">
                <span className="dropdown-text">NOTÍCIAS</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="home-text  animate__animated animate__bounce">
        <Spring
          loop
          from={{ opacity: 0, color: 'rgb(14,26,19)' }}
          to={[
            { opacity: 1, color: '#ef3742' },
            { opacity: 0, color: '#737070' },
          ]}
        >
          {(styles) => <animated.h1 style={styles}>Quem somos</animated.h1>}
        </Spring>
        <p>
          Code Like a Woman é uma empresa social que oferece a meninas e
          mulheres confiança, ferramentas, conhecimento e apoio para entrar e
          prosperar no mundo da codificação!
        </p>
      </div>
      <div className="container-h">
        <div className="redes-text-container">
          <h6> QUE </h6> <h4> MULHERES </h4>
          <h6> E </h6>
          <h4>MENINAS </h4> <h6> SEJAM </h6>
          <h4> CRIADORAS </h4> <h6> IGUAIS NA </h6>
          <h4> CONSTRUÇÃO </h4>
          <h6> DO </h6>
          <h4> FUTURO </h4>
        </div>
      </div>

      <div className="h2">
        <h2>Eventos</h2>
      </div>
      <EventsPage />

      <div className="h2-two">
        <h2>Notícias</h2>
      </div>
      <NewsPage />

      <div className="redes-container">
        <div className="redes-img">
          <a href="https://www.instagram.com/fabio_silva0409/" target="blank">
            <img src={InstImg} alt="Logo" className="img" />
          </a>
          <a href="https://www.facebook.com/fabio.bass.7" target="blank">
            <img src={FaceImg} alt="Logo" className="img" />
          </a>
          <a href="https://www.linkedin.com/in/fábio-sillva/" target="blank">
            <img src={LinkImg} alt="Logo" className="img" />
          </a>
          <p className="redes-p">
            Copyright © 2022, Code Like a Woman. Todos os direitos reservado
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
