import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Exercises from './Containers/Exercises'
import Users from './Containers/Users'
import NotFound from './Containers/NotFound'
import NavigationBar from './Components/NavigationBar'

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/' component={Exercises} />
          <Route exact path='/users' component={Users} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
