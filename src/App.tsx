import * as React from 'react';
import Names from './components/Names';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';

const App: React.FC = () => (
  <>
    <Header />
    <Names />
    <Footer />
  </>
);

export default App;
