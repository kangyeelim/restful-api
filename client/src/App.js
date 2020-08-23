import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuoteGenerator from './QuoteGenerator';
import Contribute from './Contribute';
import Home from './Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/generator" component={QuoteGenerator}/>
          <Route exact path="/add" component={Contribute}/>
        </Switch>
      </Router>
      </div>
    );
  }

}

export default App;
