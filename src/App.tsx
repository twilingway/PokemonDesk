import React from 'react';
import { useRoutes } from 'hookrouter';
import router from './routes';
import NotFoundPage from './pages/NotFound';

const App = () => {
  const match = useRoutes(router);
  return match || <NotFoundPage />;
};

export default App;
