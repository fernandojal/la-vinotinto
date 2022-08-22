// Vendors
import { Link } from 'react-router-dom';
import { Container, CardMedia } from '@mui/material';
import HomeAteneaLogo  from '../../assets/images/logo_atenea_home.png';
import HomeCardOwl  from '../../assets/images/logo_owl.png';
import HomeCardLight  from '../../assets/images/logo_light.png';
import $ from 'jquery';

//Assets
import HomeAteneaLogo from 'assets/images/logo_atenea_home.png';
import HomeCardOwl from 'assets/images/logo_owl.png';
import HomeCardLight from 'assets/images/logo_light.png';

const Home = (): JSX.Element => {
  return (
    <section id="home">
      <Container>
        <CardMedia className='logo-atenea-home' component="img" src={HomeAteneaLogo} onLoad={()=> {
        const rootStyle = $('#root');
        rootStyle.addClass('rootIndex');
        setTimeout(() =>{
          $('#home').css('height','100%');
          $('.logo-atenea-home').css('width', '60%');
          const muiContainer = $('.MuiContainer-root');
          console.log(muiContainer);
          muiContainer.addClass('acropolisImage');
        },500)
        }}></CardMedia>
        <div className='d-flex'>
          <div className='home-content'>
            <p className='home-content-h1'>¡Bienvenid@ Ateniense!</p>
            <p className='home-content-p'>Elige tu ruta  y explora el contenido</p>
            <div className='home-content-cards'>
              <Link to="/crear-cuenta" onClick={() => {
                  const rootIndex = $('#root');
                  rootIndex.removeClass('rootIndex');
              }}>
              <div className="card">
                <div className="card-body">
                  <img id='logo-card-home' src={HomeCardOwl} alt="HomeCardOwl"/>
                  <br />
                  <p className='card-body-title'>Si es tu primera visita...</p>
                  <p className='card-body-subtitle'>¡Comprueba tus conocimientos aquí!</p>
                </div>
              </div>
              </Link>
              <Link to="/iniciar-sesion" onClick={() => {
                  const rootIndex = $('#root');
                  rootIndex.removeClass('rootIndex');
              }}>
              <div className="card">
                <div className="card-body">
                  <img id='logo-card-home' src={HomeCardLight} alt="HomeCardLight"/>
                  <br />
                  <p className='card-body-title'>¡Aprender algo nuevo hoy!</p>
                  <p className='card-body-subtitle'>Ir a mi perfil</p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className='d-flex'>
          <img id='logo-atenea-home' src={HomeAteneaLogo} alt="HomeAteneaLogo"/>

          <div className='home-content'>
            <p className='home-content-h1'>¡Bienvenid@ Ateniense!</p>
            <p className='home-content-p'>Elige tu ruta  y explora el contenido</p>
          <div className='home-content-cards'>
          <Link to="/crear-cuenta">
            <div className="card">
              <div className="card-body">
                <img id='logo-card-home' src={HomeCardOwl} alt="HomeCardOwl"/>
                <br />
                <p className='card-body-title'>Si es tu primera visita ...</p>
                <p className='card-body-subtitle'>¡Comprueba tus conocimientos aquí!</p>
              </div>
            </div>
            </Link>
            <Link to="/iniciar-sesion">
            <div className="card">
              <div className="card-body">
                <img id='logo-card-home' src={HomeCardLight} alt="HomeCardLight"/>
                <br />
                <p className='card-body-title'>¡Aprender algo nuevo hoy!</p>
                <p className='card-body-subtitle'>Ir a mi perfil</p>
              </div>
            </div>
            </Link>
          </div>
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default Home;
