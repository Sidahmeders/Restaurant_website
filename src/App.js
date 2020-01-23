import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeIntro from './components/HomeIntro.component';
// import AboutPage from './dev/components/about.component';
// import MakeUpPage from './dev/components/makeUp.component';


function App() {

    return (
      <Router>
        <div className="App">
          <Route path="/" exact  component={ HomeIntro } />
          {/* <Route path="/makeup" component={ MakeUpPage } />
          <Route path="/about" component={ AboutPage } /> */}
        </div>
      </Router>
      );
}

export default App;
