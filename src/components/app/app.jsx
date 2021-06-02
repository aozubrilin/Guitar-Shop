import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import '../../sass/style.scss';
import CartContent from '../cart-content/cart-content';
import Footer from '../footer/footer';
import Header from '../header/header';
import MainContent from '../main-content/main-content';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route>
          <MainContent />
        </Route>
        <Route>
          <CartContent />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
