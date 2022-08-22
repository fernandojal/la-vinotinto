//Vendors

// Components
import { AuthContainer } from 'components/containers/AuthContainer';
import { CreateAccountForm } from './parts/CreateAccountForm';
// import $ from 'jquery';
import LogoNavBar from '../../assets/images/logo_atenea_navbar.png'
import { Link } from 'react-router-dom';
const CreateAccount = () => {
  return (
    <section id="create-account">
      <nav className="navbar navbar-light bg-light nav-create-account">
        <Link to='/' className="navbar-brand" href="#">
          <img className="d-inline-block align-top" src={LogoNavBar} alt=""/>
        </Link>
      </nav>
      <AuthContainer title="Crear Cuenta">
        <CreateAccountForm />
      </AuthContainer>
    </section>
  );
};

export default CreateAccount;
