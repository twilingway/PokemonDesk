import { useRoutes } from 'hookrouter';
import router from './routes';

const App = () => {
  const match = useRoutes(router);
  return match;
};

export default App;
