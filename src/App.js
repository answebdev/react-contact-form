import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactForm from './components/pages/ContactForm';
import Thanks from './components/pages/Thanks';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={ContactForm} />
          <Route exact path='/thanks' component={Thanks} />
          {/* <Route component={Error} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
