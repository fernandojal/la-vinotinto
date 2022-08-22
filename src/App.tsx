// Components
import RoutesContainer from 'components/containers/RoutesContainer';

// Views
import Home from 'views/Home';
import CreateAccount from 'views/CreateAccount';
import SignIn from 'views/SignIn/SignIn';
import Questions from 'views/Questionnaire/Questions';
import GraphT from 'views/GraphT/GraphT';

// Contants
import { allRoutes } from 'config/routes';

// Context
import { ModalProvider } from 'context/ModalContext';

// Components
import { AppModal } from 'components/modal/Modal';

//Style
import 'assets/css/styles.css';

const views = {
  Home,
  CreateAccount,
  SignIn,
  Questions,
  GraphT,
};

function App() {
  return (
    <ModalProvider>
      <RoutesContainer listRoutes={allRoutes} views={views} />
      <AppModal />
    </ModalProvider>
  );
}

export default App;
