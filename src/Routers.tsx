import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';


import PageNotFound from './views/PageNotFound';

const Routers: React.FC = () => (
  <Router>
    <Switch>
      <Route restricted={false} component={Home} path="/" exact />
      <Route restricted={false} component={About} path="/about" />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routers;
