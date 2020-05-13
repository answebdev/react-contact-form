import React from 'react';
import ContactForm from './components/pages/ContactForm';
import Thanks from './components/pages/Thanks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/contact' component={ContactForm} />
          <Route exact path='/thanks' component={Thanks} />
          {/* <Route component={Error} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
