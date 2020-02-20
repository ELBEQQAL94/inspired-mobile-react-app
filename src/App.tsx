import * as React from 'react';
import Names from './components/Names';
import Header from './components/Header';
import './styles/style.css';

const App: React.FC = () => (
  <>
    <Header />
    <Names />
  </>
);

export default App;
