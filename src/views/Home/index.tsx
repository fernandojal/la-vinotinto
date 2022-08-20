// Vendors
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

const Home = (): JSX.Element => {
  return (
    <section id="home" className="mt-24">
      <Container maxWidth="sm">
        <h1>HOLA MUNDO</h1>

        <Link to="/crear-cuenta">Ir a crear cuenta</Link>
        <Link to="/iniciar-sesion"> sesion</Link>
      </Container>
    </section>
  );
};

export default Home;
