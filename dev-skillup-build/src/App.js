import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
