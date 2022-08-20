// Vendors
import { ThemeProvider } from '@mui/material';

// Components
import RoutesContainer from 'components/containers/RoutesContainer';

// Views
import Home from 'views/Home';
import CreateAccount from 'views/CreateAccount';
import SignIn from 'views/SignIn/SignIn';

// Contants
import { allRoutes } from 'config/routes';

// Context
import { ModalProvider } from 'context/ModalContext';

// Components
import { AppModal } from 'components/modal/Modal';

const views = {
  Home,
  CreateAccount,
  SignIn,
};

function App() {
  return (
    <ThemeProvider theme={{}}>
      <ModalProvider>
        <RoutesContainer listRoutes={allRoutes} views={views} />
        <AppModal />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
