// Vendors
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

//Assets
import HomeAteneaLogo from 'assets/images/logo_atenea_home.png';
import HomeCardOwl from 'assets/images/logo_owl.png';
import HomeCardLight from 'assets/images/logo_light.png';

const Home = (): JSX.Element => {
  return (
    <section id="home">
      <Container>
        <div className="d-flex">
          <img
            id="logo-atenea-home"
            src={HomeAteneaLogo}
            alt="HomeAteneaLogo"
          />

          <Link to="/crear-cuenta">Ir a crear cuenta</Link>
          <Link to="/iniciar-sesion"> sesion</Link>
          <br />
          <Link to="/cuestionario"> Cuestionario</Link>
          <Link to="/grafico-habilidades"> gráfico</Link>

          <div className="home-content">
            <p className="home-content-h1">¡Bienvenid@ Ateniense!</p>
            <p className="home-content-p">
              Elige tu ruta y explora el contenido
            </p>
            <div className="home-content-cards">
              <Link to="/crear-cuenta">
                <div className="card">
                  <div className="card-body">
                    <img
                      id="logo-card-home"
                      src={HomeCardOwl}
                      alt="HomeCardOwl"
                    />
                    <br />
                    <p className="card-body-title">
                      Si es tu primera visita ...
                    </p>
                    <p className="card-body-subtitle">
                      ¡Comprueba tus conocimientos aquí!
                    </p>
                  </div>
                </div>
              </Link>
              <Link to="/iniciar-sesion">
                <div className="card">
                  <div className="card-body">
                    <img
                      id="logo-card-home"
                      src={HomeCardLight}
                      alt="HomeCardLight"
                    />
                    <br />
                    <p className="card-body-title">¡Aprender algo nuevo hoy!</p>
                    <p className="card-body-subtitle">Ir a mi perfil</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
