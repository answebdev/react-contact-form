import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import ContactForm from './components/pages/ContactForm';
import Success from './components/pages/Success';
import Error from './components/pages/Error';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import SimpleReactLightbox from 'simple-react-lightbox';
import './App.css';

function App() {
  return (
    <div className='App'>
      <SimpleReactLightbox>
        <Router>
          <Fragment>
            <Navigation />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={ContactForm} />
                <Route exact path='/success' component={Success} />
                <Route component={Error} />
              </Switch>
            </div>
          </Fragment>
        </Router>
        <Footer />
      </SimpleReactLightbox>
    </div>
  );
}

export default App;
