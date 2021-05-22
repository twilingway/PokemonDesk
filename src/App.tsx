import React from 'react';
import { useRoutes } from 'hookrouter';
import router from './routes';
import NotFoundPage from './pages/NotFound';
import Header from './components/Header';

const App = () => {
  const match = useRoutes(router);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
