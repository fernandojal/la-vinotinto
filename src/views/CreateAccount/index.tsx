//Vendors

// Components
import { AuthContainer } from 'components/containers/AuthContainer';
import { CreateAccountForm } from './parts/CreateAccountForm';

const CreateAccount = () => {
  return (
    <AuthContainer title="Crear Cuenta">
      <CreateAccountForm />
    </AuthContainer>
  );
};

export default CreateAccount;
