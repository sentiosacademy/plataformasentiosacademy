import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import GlobalStyle from './styles/global';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    // Este é o ÚNICO BrowserRouter da aplicação
    <BrowserRouter>
      <ScrollToTop />
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;