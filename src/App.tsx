import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Hooks from './Hooks';
const App: React.FC = () => {
  return (
    <Router>
      <Hooks>
        <Routes />
      </Hooks>
    </Router>
  );
};
export default App;