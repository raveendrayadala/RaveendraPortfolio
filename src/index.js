import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import GooglePage from './Integrations/GoogleMap';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';

const routing = (
  <Router>
  <div>
     <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/GoogleMap" component={GooglePage} />
      </Switch>
  </div>
 </Router>
)

ReactDOM.render(routing,document.getElementById('root'));
registerServiceWorker();
