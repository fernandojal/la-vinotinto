//Vendors

// Components
import { FormLogin } from './parts/FormLogin';
import { AuthContainer } from 'components/containers/AuthContainer';

const SignIn = () => {
  return (
    <AuthContainer title="Iniciar sesión">
      <FormLogin />
    </AuthContainer>
  );
};

export default SignIn;
