import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home.component';
// import AboutPage from './dev/components/about.component';
// import MakeUpPage from './dev/components/makeUp.component';


function App() {

    return (
      <Router>
        <div className="App">
          <Route path="/" exact  component={ Home } />
          {/* <Route path="/makeup" component={ MakeUpPage } />
          <Route path="/about" component={ AboutPage } /> */}
        </div>
      </Router>
      );
}

export default App;
